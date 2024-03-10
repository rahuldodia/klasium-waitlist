import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

export async function POST(request: Request) {
    try {
        const { email, name }: { email: string; name: string } =
            await request.json();
        if (!email || !name) {
            throw new Error("Email and name are required");
        }
        const serviceAccountAuth = new JWT({
            email: process.env.NEXT_SERVICE_ACCOUNT_EMAIL,
            key: process.env.NEXT_PRIVATE_KEY,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const spreedsheetId: string = process.env.NEXT_SPREADSHEET_ID || "";
        const doc = new GoogleSpreadsheet(spreedsheetId, serviceAccountAuth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        await sheet.addRow({
            email,
            name,
            date: new Date().toDateString(),
        });
        return Response.json({ message: "Submitted Successfully" });
    } catch (error) {
        console.log(error);
        return Response.json(
            { message: "Error" },
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}

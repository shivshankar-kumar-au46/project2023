import { connectDB } from "@/helper/db"

connectDB();
export function GET(request) {
    const users = [
        {
            name: "John Doe",
            phone: "+91-9999999999",
            course: "Data Science",
        },
        {
            name: "Shome Doe",
            phone: "+91-9994499999",
            course: "Data Science",
        },
        {
            name: "Shiv Kumar",
            phone: "+91-9999229999",
            course: "Data Science",
        },
        {
            name: "Pawan kumar",
            phone: "+91-9993399999",
            course: "Data Science",
        }
    ]

    users.responseNext

}
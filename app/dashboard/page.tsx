import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FileUploader } from "@/components/dashboard/uploader"

export default async function DashboardPage() {
    return (
        <main className="w-full px-4 py-6 md:px-8 lg:px-16">
            <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
                Dashboard
            </h1>

            <Card className="w-full shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl">Upload Your Video</CardTitle>
                    <CardDescription>
                        Upload a video file and optionally provide a transcription. This will be processed in the next step.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <FileUploader />
                </CardContent>

                {/* <CardFooter className="text-sm text-muted-foreground">
                    Need help? Contact support.
                </CardFooter> */}
            </Card>
        </main>
    )
}

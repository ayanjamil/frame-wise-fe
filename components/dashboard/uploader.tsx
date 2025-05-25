"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
    video: z
        .custom<File>((val) => val instanceof File, {
            message: "Please upload a valid video file.",
        }),
    transcription: z
        .custom<File | undefined>((val) => val === undefined || val instanceof File, {
            message: "Invalid file format for transcription.",
        })
        .optional(),
})

export function FileUploader() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            video: undefined,
            transcription: undefined,
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("Form Data:", data)
        toast("Form submitted!")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                    <FormField
                        control={form.control}
                        name="video"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload Video</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="video/*"
                                        className="min-h-40"
                                        onChange={(e) => field.onChange(e.target.files?.[0])}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Right Column */}
                <div className="space-y-6 flex flex-col justify-between">
                    <FormField
                        control={form.control}
                        name="transcription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload Transcription (optional)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept=".txt,.pdf,.doc,.docx"
                                        className="min-h-40"
                                        onChange={(e) => field.onChange(e.target.files?.[0])}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <Button type="submit" className="w-full mt-2">
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    )
}

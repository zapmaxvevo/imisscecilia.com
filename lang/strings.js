const AllStrings = {}

// To add a new language, copypaste starting from this line...
AllStrings["en"] = {
    CommonMetadata: {
        HeaderSMTitle: "I MISS CECILIA",
        FooterText: "Not affiliated with Cecilia Immergreen or hololive - Stream data provided by Holodex - {0}",
        FooterSourceLink: "Source",
        FooterStreamerLink: "Cecilia Immergreen Ch. hololive-EN"
    },

    Main: {
        PageTitle: "I MISS CC",
        DontMissCaption: "I Don't Miss CC",
        ImageAlt: "Meme",
        RandomVodLink: "Do your reps",
        ErrorMessageChannelLink: "You can check CC's channel yourself",
        ErrorOccurred: "There was a problem checking stream status. {0}!",
        Embed: {
            TextLive: "Streaming: {0}",
            TextStartingSoon: "Starting Soon: {0}",
            TextStreamQueued: "Next Stream: {0}",
        }
    },

    VideoBox: {
        StatusLive: "LIVE",
        StatusStartingSoon: "Starting Soon",
        StatusStreamQueued: "Next Stream",
        NoStreamDummyStatus: "Current Stream",
        NoStreamDummyTitle: "ᴺᴼᵀᴴᴵᴺᴳ ᴬᵃᵃᵃᵃᵃᴬᴬᴬᵃᵃᵃᵃᵃ",
        MembersOnlySubtext: "(for Otomos members only!)",
        ThumbnailAltText: "Video Thumbnail"
    },

    Reps: {
        PageTitle: "Do your reps!",
        SMMetaDescription: "Get a random CC VOD to watch!",
        VodInfoUploadDate: "Streamed or uploaded on {0}",
        PageCaption: "Watch this one!",
        RerollButton: "Reroll",
        BackToStreamTrackerButton: "Back to stream tracker",
        ErrorDescription: "A problem occurred while getting a random video: {0}",

        ErrorCodes: {
            NO_VIDEO_FOUND: "No video found."
        },
    },

    Countdowns: {
        VideoBox: {
            immediate: "(Now!)",
            forFuture: "(in %@)",
            forPast: "(%@ ago)",
            days: "%@d",
            hours: "%@h",
            minutes: "%@m",
            seconds: "%@s",
            separator: " ",
        },
        PastStream: {
            immediate: "",
            forFuture: "",
            forPast: `%@ without Cecilia`,
            days: (days) => (days > 1 ? `${days} days` : `${days} day`),
            hours: (hours) => (hours > 1 ? `${hours} hours` : `${hours} hour`),
            minutes: (minutes) => (minutes > 1 ? `${minutes} minutes` : `${minutes} minute`),
            seconds: (seconds) => (seconds > 1 ? `${seconds} seconds` : `${seconds} second`),
            separator: ", "
        }
    },
    FormatDateShort: (date) => date.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"})
}
// ...down to this line.

export default AllStrings
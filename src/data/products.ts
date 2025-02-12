import { Products } from "@/app/components/cards/interfaces/interfaces";
import notionLogo from "@/app/assets/products/notion-icon.svg";
import slackLogo from "@/app/assets/products/slack-icon.svg";
import googleDriveLogo from "@/app/assets/products/google-drive-icon.svg";
import intercomLogo from "@/app/assets/products/intercom-icon.svg";
import jiraLogo from "@/app/assets/products/jira-icon.svg";
import dropboxLogo from "@/app/assets/products/dropbox-icon.svg";

export const products: Products[] = [
    {
        id:1,
        name: "Notion",
        text: "Work faster and smarter by integrating directly with Notion, right in the app.",
        logo: notionLogo,
    },
    {
        id:2,
        name: "Slack",
        text: "Work faster and smarter by integrating directly with Slack, right in the app.",
        logo: slackLogo,
    },
    {
        id:3,
        name: "Google Drive",
        text: "Work faster and smarter by integrating directly with Google Drive, right in the app.",
        logo: googleDriveLogo,
    },
    {
        id:4,
        name: "Intercom",
        text: "Work faster and smarter by integrating directly with Intercom, right in the app.",
        logo: intercomLogo,
    },
    {
        id:5,
        name: "Jira",
        text: "Work faster and smarter by integrating directly with Jira, right in the app.",
        logo: jiraLogo,
    },
    {
        id:6,
        name: "Dropbox",
        text: "Work faster and smarter by integrating directly with Dropbox, right in the app.",
        logo: dropboxLogo,
    },
]
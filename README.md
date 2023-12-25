# Gmail Script: Delete Emails from Trash

## Overview

This Google Apps Script automates the process of permanently deleting emails from the Gmail Trash folder. The script utilizes the Gmail API to interact with email threads and messages, allowing for the removal of specified emails.

## Features

- **Configuration:** Easily customize the script behavior through variables at the beginning of the script:
  - `mymail`: Your Gmail email address.
  - `mylabel`: The label (folder) to target (e.g., "trash").
  - `permanentlyRemoveMyLabel`: Set to `true` if you want to permanently remove the label; otherwise, set to `false`.

- **Logging:** The script logs detailed information during execution, providing insights into the processed threads and any encountered errors.

## Instructions

1. Open the script in the [Google Apps Script Editor](https://script.google.com/).
2. Customize the `config` object with your Gmail account information and desired settings:
    ```javascript
    const config = {
      mymail: "your.email@gmail.com", // Your Gmail email address
      mylabel: "trash", // The label to target (e.g., "trash")
      permanentlyRemoveMyLabel: true, // Set to true for permanent removal, false otherwise
    };
    ```
3. Run the script to permanently delete emails from the specified Trash label.

## Important Notes

- If you run the script as-is, it will error out. Follow the provided instructions to set up the Gmail API and triggers.

## Setup Gmail API and Triggers

1. Click on **Resources** and go to **Advanced Google Services**.
2. Scroll down to **Gmail API** and turn it on.
3. Click the **Google Cloud Platform Link** on the same window.
4. Click on **Enable services and API**, search for Gmail, and enable it.
5. Go back to your script screen and click on the menu **Edit**.
6. Navigate to **Current project's triggers**.
7. Set a trigger to run the script at a desired time interval (e.g., every minute/hour) for automated trash emptying.

## Important Notes

- You can delete from `IN:TRASH`, `IN:SPAM`, or any other label you want. The deletion is final, and you cannot recover any of the emails.

## Contribution

Contributions, issues, and feature requests are welcome. Feel free to open a pull request or raise an issue.

## License

This project is licensed under the [MIT License](LICENSE).

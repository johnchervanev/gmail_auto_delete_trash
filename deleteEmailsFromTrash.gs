function deleteEmailsFromTrash() {
  // Constants
  const LABEL_TRASH = "trash";

  // Configuration
  const config = {
    mymail: "your email",
    mylabel: LABEL_TRASH,
    permanentlyRemoveMyLabel: true,
  };

  try {
    /**
     * Process an individual email message.
     * @param {Object} message - The email message object.
     */
    function processMessage(message) {
      Logger.log('Processing email id: %s snippet: %s', message.id, message.snippet);
      if (config.permanentlyRemoveMyLabel) {
        Gmail.Users.Messages.remove(config.mymail, message.id);
        Logger.log('Email id: %s snippet: %s REMOVED', message.id, message.snippet);
      }
    }

    /**
     * Process an individual thread, including all messages within the thread.
     * @param {Object} thread - The thread object.
     */
    function processThread(thread) {
      const messages = Gmail.Users.Threads.get('me', thread.id).messages || [];
      messages.forEach(message => {
        try {
          processMessage(message);
        } catch (messageError) {
          Logger.log('Error processing email id: %s - %s', message.id, messageError);
        }
      });
    }

    // Main logic
    let pageToken;
    do {
      const threadList = Gmail.Users.Threads.list('me', { q: 'in:' + config.mylabel, pageToken });

      (threadList.threads || []).forEach(processThread);

      pageToken = threadList.nextPageToken;
    } while (pageToken);

  } catch (error) {
    Logger.log('Script execution error: %s', error);
  }
}


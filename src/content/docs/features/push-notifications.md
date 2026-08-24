---
title: Push Notifications
---

:::caution
Push notifications are both an **Android/Linux-only** and **Mbin-only** feature at the moment. That means if you are not on an Android or Linux device, or you are not signed into an Mbin account, then push notifications are not supported.
:::

To get push notifications working in Interstellar, you will need to install a [UnifiedPush distributor app](https://unifiedpush.org/users/distributors/), which will allow Interstellar to register a push notification listener with that distributor. This enables Interstellar to receive push notifications even without it being open in the background.

For Android, our personal recommendation is to install the [Sunup](https://unifiedpush.org/users/distributors/sunup/) distributor. You don't have to do anything else through Sunup once it's installed.

For Linux, the only available distributor at the time of writing is [KUnifiedPush](https://unifiedpush.org/users/distributors/kunifiedpush/).

Once you have a UnifiedPush distributor set up, return to Interstellar and ensure you are currently signed in to an Mbin account. Now, while you're on the settings page, click Notifications, then click the toggle to enable Push Notifications. If everything went well, you should have received a "Test Notification" on your device. Toggle the switch again if you want to disable push notifications.

Push notifications from multiple accounts are supported. Just switch to the separate account you'd like, then follow the same steps to enable push notifications.

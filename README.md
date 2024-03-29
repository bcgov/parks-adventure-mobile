# Parks Adventure Mobile

Find and explore the wonders of **BC Parks**. For more information about this project, please contact [Leah Wilcock](mailto:Leah.Wilcock@gov.bc.ca), Manager, Information Services, BC Parks.

## Features

Two of the main screens, `Explore` and `Find`, provide different ways to
discover parks. Once a user finds a park they can find more information about
that park by navigating to the `Details` page. Then if that park is of interest
the `Favourites` page will help keep it close at hand. Users can also stay
up-to-date on the access status of parks (open, close, etc.) and any alert or
advisories they should be aware of before traveling.

---

### 1. Explore

The `Explore` page shows users nearby parks which offer **popular activities
and facilities**.

<kbd><img src="./assets/ExplorePage.png" width="175" /></kbd>

---

### 2. Favourites

The `Favourites` page allows users to **keep the parks they are most interested
in easily accessible**.

<kbd><img src="./assets/FavouritesPage.png" width="175" /></kbd>

---

### 3. Find

The `Find` page allows users to **search all of BCs parks** based on a number
of criteria, namely their _name_, _distance_ from the user, their _activties_,
and their _facilities_.

<kbd><img src="./assets/ParkFindPage.png" width="175" /></kbd>
<kbd><img src="./assets/FilterPage.png" width="175" /></kbd>

---

### 4. Details

The `Details` page shows users **information about each park** such as a
_description_, _location_, _activities_, _facilities_, _safety information_,
and _nature and culture_.

<kbd><img src="./assets/Details(1).png" width="175" /></kbd>
<kbd><img src="./assets/Details(2).png" width="175" /></kbd>
<kbd><img src="./assets/Details(3).png" width="175" /></kbd>
<kbd><img src="./assets/Details(4).png" width="175" /></kbd>

---

## Development Tools

### Required

- **Node.js**: LTS release or greater

- **Expo Cli**: The [Expo Cli](https://docs.expo.io/workflow/expo-cli/) enables
developers to run the project server, open simulators, build binaries, and
manage Apple and Google credentials.

### Optional

- **Expo App**: The Expo App for
[Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA&gl=US)
and [iOS](https://apps.apple.com/ca/app/expo-client/id982107779) allows
developers to run the app on their own device during development.

- **Android Studio**: If you do not have an Android device you can use [Android
Studio](https://developer.android.com/studio) to run a simulator to test
various Android versions.

- **MacOS and Xcode**: If you do not have an iOS mobile device but have MacOS,
you can use [Xcode](https://developer.apple.com/xcode/) to run a simulator to
test the iOS versions. Additionally, in order to use Transporter to upload
bundles to App Store Connect, MacOS and Xcode are required.

- **Transporter**: [Transporter](https://apps.apple.com/us/app/transporter/id1450874784?mt=12)
is one of the tools that can be used to upload the `.ipa` file to App Store Connect.

- **Test Flight**: [Test Flight](https://apps.apple.com/ca/app/testflight/id899247664)
will allow external iPhone beta testers to test the app on their own devices.


## Scripts

### Development

```bash
# Start or restart a local server for the app and get a URL/QR code to access
# the Expo Cli
npm start

# Open the app in the Expo Client on a connected Android device
npm run android

# Open the app in the Expo Client in an iOS simulator
npm run ios

# Run the automated tests (prettier, eslint, and jest)
npm test

# Verify ESLint rules are being met
npm run eslint

# Rewrite files using prettier rules
npm run prettier

# Verify Prettier rules are being met
npm run pretest

# Create Xcode and Android Studio projects for the app (to be used only if Expo
# becomes too restrictive).
npm run eject
```

### Building for testing or production

We are using React Native so that we can build this application for both iOS
and Android with a single data set. To create those bundles we must follow two
similar but slightly different workflows. For both operating systems we need
Expo to build us the appropriate bundles, an `.apk` file for Android and a
`.ipa` file for iOS. The following commands are used for that. We've created 4
different commands, two for each OS. One allows us to create a build under the
`Dev` release channel:

```bash
# Build a standalone IPA for your project, signed and ready for submission to
# the Apple App Store with release-channel set to "dev". It will be available
# via your expo dashboard.
yarn run build-dev-ios

# Build a standalone APK for your project, signed and ready for submission to
# the Google Play Store with release-channel set to "dev". It will be available
# via your expo dashboard.
npm run build-dev-android
```

and one allows us to create a build under the `Prod` release channel:

```bash
# Build a standalone IPA for your project, signed and ready for submission to
# the Apple App Store with release-channel set to "prod". It will be available
# via your expo dashboard.
npm run build-prod-ios

# Build a standalone APK for your project, signed and ready for submission to
# the Google Play Store with release-channel set to "prod". It will be available
# via your expo dashboard.
npm run build-prod-android
```

Building for different release channels is primarily useful if you need
separate behaviour for testing and production which this app currently does not
require. Once you've followed the terminal steps it will print a url that can
be used to access the builds. It will look like `expo.io/builds/some-unique-id`.
From there, once the builds have finished, you can download both files. For iOS,
you can use Transporter to upload it to TestFlight. For Android the `.apk` file
can be installed directly onto Android devices. You can find more information
on distributing Android apps
[here](https://developer.android.com/distribute/marketing-tools/alternative-distribution#email).

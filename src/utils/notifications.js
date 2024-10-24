import notifee, { AuthorizationStatus } from '@notifee/react-native';
import AllDoctors from '../screens/AllDoctors';
import { AllDoctorsData, AllImages } from '../constants/data';

export const requestUserPermission=async () => {
    const settings = await notifee.requestPermission({
        sound: true,
        badge: true,
        alert: true,
        vibrate: true,
        popInitialNotification: true,
        categoryId: 'default',
        announcement: true,
      });
  
    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    //   console.log('Permission settings:', settings);
    } else {
    //   console.log('User declined permissions');
    }
  }
  export const checkApplicationPermission=async () =>  {
    const settings = await notifee.requestPermission();
  
    if (settings.authorizationStatus) {
    //   console.log('User has notification permissions enabled');
    } else {
    requestUserPermission();
    //   console.log('User has notification permissions disabled');
    }
  
    // console.log('iOS settings: ', settings.ios);
  }

  
  export const displayNotification=async (title="", body="", media) => {
   
    notifee.displayNotification({
        title: title,
        body: body,
        ios: {
            foregroundPresentationOptions: {
                badge: true,
                sound: true,
                banner: true,
                list: true,
              },
          attachments: [
            // {
            //   // iOS resource
            //   url: 'local-image.png',
            //   thumbnailHidden: true,
            // },
            {
              // Local file path.
              url: AllImages[media-1]?.image_path,
              thumbnailTime: 3, 
            },
            // {
            //   // React Native asset.
            //   url: require('./assets/my-image.gif'),
            // },
            // {
            //   // Remote image
            //   url: 'https://www.sobharealty.com/media/yn2a4sbg/apartments_banner_desktop-1.webp?width=1920&height=944&v=1db209401816ef0',
            // },
          ],
        },
      });
      notifee.onBackgroundEvent(async ({ type, detail }) => {
        const { notification, pressAction } = detail;
      
        // Check if the user pressed the "Mark as read" action
        if (type === EventType.ACTION_PRESS && pressAction.id === 'mark-as-read') {
          // Decrement the count by 1
          await notifee.decrementBadgeCount();
      
          // Remove the notification
          await notifee.cancelNotification(notification.id);
        }
      });
  }

  export const hideAllBadgeCount=async () => {
    notifee.setBadgeCount(0).then();

  }
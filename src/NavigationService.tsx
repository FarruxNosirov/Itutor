import {
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
import {ROUTES} from './constants/routes';

export default class NavigationService {
  static ref: NavigationContainerRefWithCurrent<any> =
    createNavigationContainerRef<any>();
  static navigate = (
    name: keyof typeof ROUTES,
    params?: {[key: string]: string | number | undefined},
  ) => {
    if (this.ref.isReady()) {
      this.ref.navigate(ROUTES[name], params);
    }
  };
  static goBack = () => {
    if (this.ref.isReady()) {
      this.ref.goBack();
    }
  };
}

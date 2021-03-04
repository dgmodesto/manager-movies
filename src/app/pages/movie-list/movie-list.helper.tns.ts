import * as app from '@nativescript/core/application';
import * as dialogs from '@nativescript/core/ui/dialogs';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

export class MovieListHelper {
  static showDeleteMovieConfirmation(message: string): Promise<boolean> {
    return dialogs.confirm({
      title: 'Excluir Filmes',
      message: message,
      okButtonText: 'Excluir',
      cancelButtonText: 'Manter Filme'
    });
  }


  static showDrawer() {
    const sidedrawer = <RadSideDrawer><any>app.getRootView();
    sidedrawer.showDrawer();
  }

}

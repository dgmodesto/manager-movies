
export class MovieListHelper {
  static showDeleteMovieConfirmation(message: string): Promise<boolean> {
    return new Promise((resolve, rejecet) => {
      resolve(confirm(message));
    });
  }
}

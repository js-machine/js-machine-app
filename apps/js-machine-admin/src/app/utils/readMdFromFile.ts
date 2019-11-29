export async function readMdFromFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = async fileLoadedEvent => {
      if (fileLoadedEvent.target) {
        const textFromFileLoaded = fileLoadedEvent.target.result;

        try {
          resolve(textFromFileLoaded as string);
        } catch (err) {
          reject(err);
        }
      }
    };

    fileReader.readAsText(file, 'UTF-8');
  });
}

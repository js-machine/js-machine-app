export async function readMdFromFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    var fileReader = new FileReader();

    fileReader.onload = async fileLoadedEvent => {
      if (fileLoadedEvent.target) {
        // as any due to bug in types
        const textFromFileLoaded = (fileLoadedEvent.target as any).result;

        try {
          resolve(textFromFileLoaded);
        } catch (err) {
          reject(err);
        }
      }
    };

    fileReader.readAsText(file, 'UTF-8');
  });
}

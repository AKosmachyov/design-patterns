class AvatarFacade {

    createNewAvatar(): ArrayBuffer {
        let image = this.getCameraFrame();
        image = this.blurPhoto(image);
        image = this.compressPhoto(image);
        return image.buffer;
    }

    private getCameraFrame(): Uint8Array {
        return (new CameraAdapter()).captureFrame();
    }

    private blurPhoto(image: Uint8Array): Uint8Array {
        return (new NeuralEngine()).blurImage(image);
    }

    private compressPhoto(image: Uint8Array): Uint8Array {
        return (new СompressionHelper()).compressImage(image);
    }

}

class CameraAdapter {

    requestPermission() {
        console.log('requestPermission');
    }

    captureFrame(): Uint8Array {
        this.requestPermission();
        console.log('capture camera frame');
        return new Uint8Array(10);
    }

}

class NeuralEngine {

    blurImage(image: Uint8Array): Uint8Array {
        console.log('blur image');
        return image;
    }

}

class СompressionHelper {

    private run() {
        console.log('run compression operation');
    }

    compressImage(image: Uint8Array): Uint8Array {
        this.run();
        console.log('compress image');
        return image;
    }

}

function clientCode() {
    const facade = new AvatarFacade();
    const avatarUrl = facade.createNewAvatar();
    console.log('finish');
}

clientCode();

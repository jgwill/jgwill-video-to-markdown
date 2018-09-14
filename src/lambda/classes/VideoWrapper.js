export default class VideoWrapper {
    static get videoProviders() {
        return [
            require('./Providers/Dailymotion'),
            require('./Providers/Youtube'),
            require('./Providers/Vimeo'),
        ];
    }

    static create(url) {
        const videoProvider = this.videoProviders.filter(vp => {
            return vp.default.check(url);
        });

        if (videoProvider.length !== 1) {
            throw new Error('VideoProvider not found.');
        }

        return new videoProvider[0].default(url);
    }
}
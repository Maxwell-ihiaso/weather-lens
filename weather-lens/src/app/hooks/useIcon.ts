import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Add more icons to be used in the project here
// export newly added icons by including it in the
// return statement of the hook.

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

export const useIcon = () => {
    return {
        faYoutube,
        faFacebook,
        faTwitter,
        faInstagram,
        FontAwesomeIcon,
    }
}

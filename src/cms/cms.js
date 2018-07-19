import CMS from 'netlify-cms'

import HomepagePreview from './preview-templates/HomepagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('homepage', HomepagePreview)

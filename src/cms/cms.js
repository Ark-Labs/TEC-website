import CMS from 'netlify-cms'
import * as ColorWidget from 'netlify-cms-widget-color'

import HomepagePreview from './preview-templates/HomepagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('homepage', HomepagePreview)
CMS.registerWidget('color', ColorWidget.Control)

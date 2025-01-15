import Alpine from 'alpinejs'
import 'unpoly'
import 'unpoly/unpoly.css'

Alpine.start()

up.log.enable();
up.link.config.preloadSelectors.push('a[href]')

import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
export default function decorate(block) {
   [...block.children].forEach((row) => {
      alert('hi' + row);
     row.addClass('click');
   }
                               
}

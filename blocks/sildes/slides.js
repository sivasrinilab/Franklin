import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
export default function decorate(block) {
   alert('hellooo')
   [...block.children].forEach((row) => {
      alert('hi' + row);
     row.addClass('click');
   }
                               
}

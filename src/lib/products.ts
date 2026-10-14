import cabinImage from '@/assets/portacabin.jpg'
import containerImage from '@/assets/container.jpg'
import interiorImage from '@/assets/interior.jpg'
import officeImage from '@/assets/modular-office.jpg'

export const products = [
  { id: 'portacabins', title: 'Portacabins', category: 'Portable spaces', image: cabinImage, description: 'A practical space for site offices, guard rooms and everyday operations.', details: ['Flexible layouts', 'Office & site applications', 'Discuss insulation and finishes'] },
  { id: 'containers', title: 'Shipping containers', category: 'Container solutions', image: containerImage, description: 'Versatile steel containers for storage, workspace and custom conversions.', details: ['Storage applications', 'Conversion possibilities', 'Discuss size and condition'] },
  { id: 'offices', title: 'Custom office cabins', category: 'Made for your business', image: interiorImage, description: 'Workspace concepts that bring comfort and function to a compact footprint.', details: ['Workspace planning', 'Interior finish options', 'Discuss electrical requirements'] },
  { id: 'modular', title: 'Modular spaces', category: 'Room to do more', image: officeImage, description: 'Explore modular layouts for your next workplace or accommodation requirement.', details: ['Project-specific layouts', 'Flexible space planning', 'Discuss site requirements'] },
]
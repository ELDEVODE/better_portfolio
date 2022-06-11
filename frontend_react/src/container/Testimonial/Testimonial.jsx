import './Testimonial.scss'
import { motion } from 'framer-motion';

import AppWrap from '../../wrapper/AppWrap';
import { urlFor, Client } from '../../client';
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi';
import MotionWrap from '../../wrapper/MotionWrap';

const Testimonial = () => {
  const [Brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const query = '*[_type =="testimonials"]';
    const skillsQuery = '*[_type =="brands"]';

    Client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    Client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    (
      <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(testimonials[currentIndex].imgurl)} alt="testimonial" />
          </div>
        </>
      )}
      </>
      
    )
  )
}
export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);
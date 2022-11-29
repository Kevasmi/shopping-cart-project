import CC850 from '../imgs/CC850_Car.jpg';
import gemera from '../imgs/Gemera_Car.jpg';
import jeskoAbsolut from '../imgs/Jesko_Absolut_Car.jpg';
import jesko from '../imgs/Jesko_Car.jpg';
import regera from '../imgs/Regera_Car.jpg';
import oneOne from '../imgs/One_1_Car.jpg';
import uniqid from 'uniqid';

interface CarData {
  name: string;
  description: string;
  price: number;
  img: string;
  id: string;
}

const carData: CarData[] = [
  {
    name: 'CC850',
    description: `The CC850 is the ideal combination of classic design and
    cutting-edge technology, and is engineered to be the perfect
    driver’s car.
    
    Inspired by the original CC8S, the CC850 features the classic
    Koenigsegg silhouette, while the interior, and particularly the
    analog chronocluster, is a work of art. Meanwhile, every
    innovation under the hood is designed to enhance the driving
    experience, including the engage shift system (ESS) and
    light-speed transmission (LST).`,
    price: 3650000,
    img: CC850,
    id: uniqid(),
  },
  {
    name: 'Gemera',
    description: `The Gemera combines the exciting performance
    characteristics of a mid-engine two-seater megacar with the
    practicalities of a four-seater car with more luggage space.
    
    This ground-breaking combination means that the Koenigsegg
    megacar experience can now be shared with family and
    friends.`,
    price: 1700000,
    img: gemera,
    id: uniqid(),
  },
  {
    name: 'Jesko Absolut',
    description: `Every surface element is constructed to reduce drag or
    surrounding turbulence while increasing high-speed stability.
    Just as powerful as its track-focused sibling, the Jesko
    Absolut is the more seamless and stealthier of the two.
    
    With a drag coefficient value of only 0.278 Cd in combination
    with a frontal area of 1.88 m² and a minimum power output of
    1600 bhp, the Jesko Absolut is destined to achieve higher,
    more extraordinary speeds than any Koenigsegg or any other
    fully homologated car before it. How fast? Time will tell.
    Looking at the math and our advanced simulations – it will be
    unbelievably fast.`,
    price: 2840000,
    img: jeskoAbsolut,
    id: uniqid(),
  },
  {
    name: 'Jesko',
    description: `The Jesko is named after Jesko von Koenigsegg, the father of
    company Founder and CEO, Christian von Koenigsegg.
    
    It features a redesigned 5.0 litre twin-turbo V8 engine
    producing 1280 hp on standard gasoline and 1600 hp on E85
    biofuel (in some markets) alongside the revolutionary new
    9-speed Koenigsegg Light Speed Transmission (LST)
    system. Advanced aerodynamics offer over 1000 kg of
    downforce, making it the ultimate track weapon.`,
    price: 2700000,
    img: jesko,
    id: uniqid(),
  },
  {
    name: 'Regera',
    description: `The Regera was specifically designed to be a luxury megacar
    alternative to Koenigsegg’s traditional extreme, lightweight,
    race-like road-legal cars. It combines a powerful twin-turbo
    V8 combustion engine with three electric motors and
    cutting-edge battery power via new powertrain technology
    called the Koenigsegg Direct Drive.
    
    While traditional Koenigseggs have always had surprising
    levels of practicality, creature comforts and features, our
    primary focus has always been to make the fastest cars in the
    world. The Regera continues this tradition, but with innovative
    technology that blends outrageous speed, supreme comfort,
    and a unique Direct Drive experience.`,
    price: 2900000,
    img: regera,
    id: uniqid(),
  },
  {
    name: 'One:1',
    description: `The iconic One:1 is the first homologated production car in the
    world with one megawatt of power, crowning it the world´s
    first production megacar. The hp-to-kg curb weight ratio is an
    astonishing 1:1 – the “dream” equation, previously thought
    impossible in road-legal sports cars. Thus, the name One:1.
    
    The One:1 truly raised the performance bar, featuring new
    unique solutions that enhance track performance and top
    speed while never straying from everyday usability and
    stunning looks.`,
    price: 2850000,
    img: oneOne,
    id: uniqid(),
  },
];

export default carData;

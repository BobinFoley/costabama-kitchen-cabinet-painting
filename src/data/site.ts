// Business details used across every page. Fill in the TODO values before launch.
export const business = {
  name: 'Coastal Bama Kitchen Cabinet Repainting',
  shortName: 'Coastal Bama',
  tagline: 'Factory-smooth cabinet finishes for Gulf Coast kitchens',
  phone: '(251) 555-0123', // TODO: real phone number
  phoneHref: 'tel:+12515550123', // TODO: match the phone number above
  email: 'hello@coastalbamacabinets.com', // TODO: real email
  city: 'Gulf Shores',
  region: 'AL',
  county: 'Baldwin County',
  hours: 'Mon–Fri 7:30am–5:30pm · Sat by appointment',
};

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/process/', label: 'Our Process' },
  { href: '/colors/', label: 'Colors' },
  { href: '/service-areas/', label: 'Service Areas' },
  { href: '/about/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
];

export interface Area {
  slug: string;
  name: string;
  blurb: string;
  homes: string;
  neighborhoods: string[];
  drive: string;
  intro: string[];
}

// Towns with their own page.
export const areas: Area[] = [
  {
    slug: 'gulf-shores',
    name: 'Gulf Shores',
    blurb: 'Our home base, from the beach road to the neighborhoods off County Road 6.',
    homes: 'beach houses, raised cottages and year-round family homes',
    neighborhoods: ['West Beach', 'Craft Farms', 'Peninsula of Gulf Shores', 'Bon Secour area', 'Fort Morgan Road', 'Lake Shelby area'],
    drive: 'We are based here, so most Gulf Shores homes are a short drive from the shop.',
    intro: [
      'Gulf Shores kitchens work hard. Salt air, summer humidity and a steady stream of guests wear down cabinet finishes faster than they would inland. Oak cabinets from the 1990s and builder-grade white paint that has yellowed are the two things we see most.',
      'Repainting gives you a new-looking kitchen without tearing out boxes that are still solid. We spray doors and drawer fronts off-site, and refinish the frames in place. Plan to be out of the kitchen while we work so the new finish can dry and cure without marks.',
    ],
  },
  {
    slug: 'orange-beach',
    name: 'Orange Beach',
    blurb: 'Condos, canal homes and rental properties along Perdido Beach Boulevard.',
    homes: 'high-rise condos, canal-front homes and short-term rentals',
    neighborhoods: ['Perdido Beach Boulevard condos', 'Ono Island', 'Bear Point', 'Terry Cove', 'Wharf area', 'Romar Beach'],
    drive: 'About 15 minutes east of Gulf Shores along Highway 182.',
    intro: [
      'A lot of Orange Beach kitchens are in condos and rentals, where time is money. We schedule around booking calendars and HOA rules, protect elevators and hallways, and keep work to the hours your building allows.',
      'For rental owners, a refreshed kitchen photographs better in listings and holds up to heavy use. We use hard, cleanable enamels made for cabinets, not wall paint.',
    ],
  },
  {
    slug: 'foley',
    name: 'Foley',
    blurb: 'Growing subdivisions and established homes along the Highway 59 corridor.',
    homes: 'newer subdivisions and established brick homes',
    neighborhoods: ['Glenlakes', 'Live Oak Village', 'Graham Creek area', 'Riverwood', 'Downtown Foley', 'Highway 98 corridor'],
    drive: 'About 20 minutes north of Gulf Shores up Highway 59.',
    intro: [
      'Many Foley homes were built in the last twenty years with builder-grade oak or maple cabinets. The boxes are fine; the color is dated. Repainting is often the most cost-effective upgrade in the house.',
      'We also refinish bathroom vanities, laundry cabinets and built-ins in the same visit, so the whole house matches.',
    ],
  },
  {
    slug: 'fairhope',
    name: 'Fairhope',
    blurb: 'Eastern Shore homes, from downtown cottages to bayfront houses.',
    homes: 'historic cottages, bayfront homes and newer Eastern Shore builds',
    neighborhoods: ['Downtown Fairhope', 'Fruit and Nut District', 'Point Clear', 'Montrose', 'Rock Creek', 'Fairhope Avenue area'],
    drive: 'About 45 minutes from Gulf Shores across the county.',
    intro: [
      'Fairhope kitchens range from older cottages with site-built cabinets to newer homes with full-overlay doors. We match the finish to the house: soft greens and warm whites for older homes, deeper blues and blacks for modern ones.',
      'Site-built cabinets often have years of paint and grease on them. We clean, degloss and prime properly so the new finish actually bonds.',
    ],
  },
];

// Towns served without their own page.
export const otherAreas = ['Fort Morgan', 'Bon Secour', 'Elberta', 'Magnolia Springs', 'Summerdale', 'Robertsdale', 'Daphne', 'Spanish Fort', 'Lillian', 'Perdido Key, FL'];

export const services = [
  {
    title: 'Kitchen cabinet repainting',
    body: 'Doors and drawer fronts are removed, sprayed in our shop and reinstalled. Frames, end panels and islands are cleaned, sanded, primed and finished in place.',
  },
  {
    title: 'Bathroom vanities',
    body: 'Vanities take the same prep and enamel as kitchens. Most fit into the same week as a kitchen job.',
  },
  {
    title: 'Islands in a contrast color',
    body: 'A navy, green or charcoal island against lighter perimeter cabinets is one of the most requested looks we do.',
  },
  {
    title: 'Hardware updates',
    body: 'We can fill old hardware holes and drill for new pulls, or reuse your existing hinges and knobs after cleaning them.',
  },
  {
    title: 'Built-ins, laundry and bar cabinets',
    body: 'Bookcases, mudroom lockers, wet bars and laundry cabinets get the same finish so the house reads as one.',
  },
  {
    title: 'Condo and rental turnovers',
    body: 'Scheduled between bookings with HOA-friendly hours, protected common areas and clear start and finish dates.',
  },
];

export const process = [
  {
    day: 'Day 1',
    title: 'Protect, label, remove',
    body: 'We mask countertops, floors, backsplash and appliances. Every door and drawer front is labeled and taken to our shop. Hinges and hardware are bagged by location.',
  },
  {
    day: 'Day 2',
    title: 'Clean and prep',
    body: 'Kitchen grease is the main reason paint fails, so everything is degreased first. Then we sand, fill dents and open grain where requested, and caulk seams.',
  },
  {
    day: 'Day 3',
    title: 'Prime',
    body: 'A bonding primer goes on frames and doors. On oak and other tannin-heavy woods we use a stain-blocking primer so the grain does not bleed through white paint.',
  },
  {
    day: 'Day 4',
    title: 'Finish coats',
    body: 'Doors are sprayed in the shop. Frames get two coats of cabinet-grade enamel, sprayed or fine-rolled depending on the room.',
  },
  {
    day: 'Day 5',
    title: 'Reinstall and walkthrough',
    body: 'Doors go back up, hinges are adjusted so the reveals line up, and new hardware goes on. We walk the kitchen with you and touch up anything you point out.',
  },
];

export const faqs = [
  {
    q: 'How long does a kitchen take?',
    a: 'Most kitchens are finished in five working days. Very large kitchens, heavy repairs or color changes from dark to white can add a day. You get the schedule in writing before we start.',
  },
  {
    q: 'Can we use the kitchen during the job?',
    a: 'Plan on not using it. Fresh cabinet paint has to dry and cure, and steam, grease, bumps and fingerprints leave permanent marks. Set up a small temporary kitchen in another room for the week. After we reinstall, keep treating the cabinets gently for a few weeks while the finish fully hardens.',
  },
  {
    q: 'What paint do you use?',
    a: 'Cabinet-grade enamels such as urethane-modified alkyds and waterborne alkyds. They level out smoothly and cure hard. We do not use wall paint on cabinets.',
  },
  {
    q: 'Will the oak grain show through?',
    a: 'Oak has open grain that will still show texture under paint. If you want a smooth, slab-like look we can fill the grain for an added cost. We show you both on a sample door.',
  },
  {
    q: 'Does the beach humidity affect the finish?',
    a: 'Humidity slows curing, so we watch the weather, run dehumidification when needed and give doors proper dry time in the shop before reinstalling. The finish is fully hard after a few weeks; treat it gently until then.',
  },
  {
    q: 'How much does it cost?',
    a: 'Price depends on the number of doors and drawers, the condition of the cabinets and whether you add grain filling or new hardware. We give you a fixed written price after a free in-home visit.',
  },
  {
    q: 'Do you work in condos?',
    a: 'Yes. We follow building rules on work hours, elevator use and parking, and we can provide a certificate of insurance to your HOA or property manager.',
  },
  {
    q: 'Is repainting cheaper than new cabinets?',
    a: 'Usually by a wide margin, as long as the cabinet boxes are sound. If water damage or layout problems make replacement the better choice, we will tell you.',
  },
];

// Hex values are screen approximations; `matches` are the closest store paint colors.
export const colors = [
  {
    name: 'Coastal Blue',
    hex: '#8FB0C7',
    note: 'Dusty sky blue for lowers and islands. Pulls from the Gulf horizon.',
    matches: ['SW Lullaby (SW 9136)', 'SW Niebla Azul (SW 9137)', 'BM Beach Glass (1564)'],
  },
  {
    name: 'Driftwood Beige',
    hex: '#D8CEBF',
    note: 'Light natural taupe for uppers and pantries, like dune sand and weathered wood.',
    matches: ['SW Accessible Beige (SW 7036)', 'SW Drift of Mist (SW 9166)', 'BM Pale Oak (OC-20)'],
  },
  {
    name: 'Seafoam',
    hex: '#A9C7BA',
    note: 'Muted sage with an aqua undertone, like the shallow emerald water.',
    matches: ['SW Sea Salt (SW 6204)', 'SW Comfort Gray (SW 6205)', 'BM Healing Aloe (1562)'],
  },
  {
    name: 'Crisp Coastal White',
    hex: '#F3F1EA',
    note: 'Clean white with a little warmth. Matches white quartz and trim.',
    matches: ['SW Pure White (SW 7005)', 'BM Chantilly Lace (OC-65)'],
  },
  { name: 'Pelican Gray', hex: '#7D817E', note: 'Mid gray for full kitchens or islands.' },
  { name: 'Bon Secour Green', hex: '#4E6152', note: 'Deep green for islands and bars.' },
  { name: 'Gulf Navy', hex: '#24384A', note: 'Classic coastal navy island color.' },
  { name: 'Pier Piling', hex: '#3A3734', note: 'Near-black for a modern kitchen.' },
] as { name: string; hex: string; note: string; matches?: string[] }[];

// Two-tone combinations: lighter uppers over colored lowers and island.
export const palettes = [
  {
    name: 'Coastal Blue & Driftwood Beige',
    upper: 'Driftwood Beige',
    lower: 'Coastal Blue',
    body: 'Driftwood beige on the uppers and pantry, dusty coastal blue on the lowers and island. Warm and relaxed, and it pairs well with brass hardware and light oak floors.',
  },
  {
    name: 'Seafoam & Crisp White',
    upper: 'Crisp Coastal White',
    lower: 'Seafoam',
    body: 'Crisp white uppers keep the room bright; seafoam lowers and island bring in the color of the water. Brushed nickel hardware suits this one best.',
  },
];

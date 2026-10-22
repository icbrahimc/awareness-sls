// Site content lives here. Search this file for "TODO" to find details that are still placeholders.

// Where the contact form sends messages. Leave '' to open the visitor's email app (mailto:) instead.
// Formspree: 'https://formspree.io/f/your-form-id'. Netlify Forms: '/' (see README).
export const FORM_ENDPOINT = '';

export const site = {
  name: 'Awareness SLS',
  legalName: 'Awareness LLC',
  tagline: 'Supported living services in Sacramento and Yolo Counties.',
  description:
    'Awareness SLS provides supported living services for adults with developmental and intellectual disabilities in Sacramento and Yolo Counties, serving the Alta California Regional Center area.',
  founded: 'November 2024',
  hometown: 'Elk Grove, California',
  email: 'awarenessllc24@yahoo.com',
  // TODO: add the confirmed phone number, e.g. '(916) 555-0123'. While empty, no phone is shown anywhere.
  phone: '',
  address: '123 Placeholder St, Sacramento, CA 95814', // TODO: placeholder office address
  officeHours: 'Monday–Friday, 9:00 AM–5:00 PM',
  supportHours: '24/7, 365 days a year',
  serviceArea: "Alta California Regional Center's area in Sacramento and Yolo Counties",
  towns: ['Sacramento', 'Elk Grove', 'Galt', 'Davis', 'West Sacramento', 'Woodland'],
  // TODO: placeholder wording, confirm with the agency
  nondiscrimination:
    'Awareness SLS does not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, age or disability in its services or employment.',
};

export const phoneHref = `tel:+1${site.phone.replace(/\D/g, '')}`;

export const confidentiality =
  "Please don't include medical records or other confidential information in this form or by email. We'll arrange a secure way to share referral documents.";

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#who-we-serve', label: 'Who we serve' },
  { href: '#careers', label: 'Careers' },
];

export const leadership = [
  { name: 'Fredica Chambers', title: 'Program Director' },
  { name: 'Janet Mahoi', title: 'Assistant Program Director' },
];

export const approach = [
  'Person-centered planning: we plan with you, not for you.',
  'Support changes as your needs change, without you having to move.',
  'Help where you live, work and spend your time.',
  'No one is turned away solely because of the nature or severity of their disability.',
  'Support through every stage of life, including aging.',
];

export const values = [
  'Choose where, and with whom, you live.',
  'Decide how your home looks and feels.',
  'Choose, and change, your SLS agency and support staff.',
  'Take an active part in your ISP, so your services fit your needs and preferences.',
  'Keep getting the support you need as it changes, in the home you chose.',
  'Share how satisfied you are with your services, and have your feedback taken into account.',
];

export const goals = [
  'Support each person in exercising their civil right to vote.',
  'Help each person find medical care and get quality health care.',
  'Build self-confidence and self-esteem.',
];

export const services: { name: string; note?: string }[] = [
  { name: 'A home of your own', note: 'finding, setting up and keeping a home' },
  {
    name: 'Health and well-being',
    note: 'medical, dental and psychiatric appointments, prescriptions and hygiene, with an LVN on staff and home health partners',
  },
  { name: 'Cooking, menu planning and shopping' },
  { name: 'Cleaning and home maintenance' },
  { name: 'Money management and budgeting' },
  { name: 'Getting around', note: 'including learning to use public transportation' },
  { name: 'Community life and recreation', note: 'and building a circle of support' },
  { name: 'Self-advocacy training' },
  { name: 'Home and community safety' },
  { name: '24-hour emergency assistance', note: 'on-call support, day or night' },
  { name: 'Help applying for IHSS', note: 'In-Home Supportive Services' },
];

export const staffing = 'Staffing ranges from 1:1 to 1:3, and 2:1 when needed.';

export const eligibility =
  'Adults 18 and older with developmental and/or intellectual disabilities who are served by Alta California Regional Center, whose IPP recommends supported living, and who want to live independently.';

export const whoWeServe = [
  'People with autism, Down syndrome, cerebral palsy (ambulatory), epilepsy and other developmental disabilities, from mild to severe.',
  'People changing SLS providers, or moving from a facility into their own home.',
];

export const experience =
  'Our team has experience with health needs (such as diabetes, hypertension, G-tube care, oxygen and injections), behavioral support and aging.';

export const steps = [
  {
    title: 'Reach out.',
    text: 'Individuals, parents, authorized representatives and service coordinators can call or write. Coordinators, please send a referral packet: the current IPP, CDER, medical evaluation and any psych or behavioral reports.',
  },
  { title: 'Meet.', text: 'We review the referral and set up an interview within 3 business days.' },
  {
    title: 'Plan and start.',
    text: 'We prepare an intake assessment, schedule and budget for the regional center. Services start once the Purchase of Service is approved, and we check in on your ISP at 30 days.',
  },
];

export const careers = {
  role: 'SLS Instructor',
  requirements: [
    'At least 1 year of experience supporting people with developmental or intellectual disabilities',
    'FBI/DOJ background clearance',
    'Health screening with TB clearance',
    'Current First Aid and CPR certification',
    "A valid California driver's license and insurance, if driving individuals",
  ],
  plus: 'Medical or behavior-support experience is a plus. All staff get ongoing training (12+ hours a year).',
};

export const roles = [
  { value: 'individual-family', label: 'Individual / Family member' },
  { value: 'coordinator', label: 'Regional center coordinator' },
  { value: 'job-seeker', label: 'Job seeker' },
  { value: 'other', label: 'Other' },
];

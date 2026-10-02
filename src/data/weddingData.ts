export interface EventDetail {
  id: string;
  name: string;
  tagline: string;
  date: string;
  formattedDate: string;
  time: string;
  venue: string;
  address: string;
  city: string;
  dressCode: string;
  description: string;
  iconName: string;
  googleMapsUrl: string;
  calendarLink: string;
}

export interface StoryMoment {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  caption: string;
}

export interface WishMessage {
  id: string;
  name: string;
  relation: string;
  message: string;
  timestamp: string;
  likes: number;
}

export interface ThingToKnow {
  id: string;
  title: string;
  category: 'venue' | 'etiquette' | 'stay' | 'contact';
  description: string;
  icon: string;
  details: string[];
}

export interface WeddingData {
  couple: {
    groom: {
      firstName: string;
      fullName: string;
      title: string;
      about: string;
      parents: string;
      grandparents: string;
      image: string;
    };
    bride: {
      firstName: string;
      fullName: string;
      title: string;
      about: string;
      parents: string;
      grandparents: string;
      image: string;
    };
    hashtag: string;
    heading: string;
    subheading: string;
  };
  weddingDateISO: string; // 2027-01-31T09:30:00
  formattedDate: string;
  city: string;
  venueName: string;
  gurbaniBlessing: {
    gurmukhi: string;
    translation: string;
  };
  events: EventDetail[];
  storyMoments: StoryMoment[];
  preWeddingVideoUrl: string;
  thingsToKnow: ThingToKnow[];
  initialWishes: WishMessage[];
  contacts: {
    name: string;
    relation: string;
    phone: string;
  }[];
  audioTrack: {
    title: string;
    artist: string;
    url: string;
  };
}

export const WEDDING_DATA: WeddingData = {
  couple: {
    groom: {
      firstName: "Rajveer",
      fullName: "Rajveer Singh",
      title: "The Groom",
      about: "A gentleman of warmth, honor and quiet grace. Devoted to family heritage and building a life grounded in love and faith.",
      parents: "Harpreet Singh & Manjyot Kaur",
      grandparents: "Late S. Jagjeet Singh & S. Manjeet Kaur",
      image: "/images/amrit_simran_2d_couple_illustration.png"
    },
    bride: {
      firstName: "Lavleen",
      fullName: "Lavleen Kaur",
      title: "The Bride",
      about: "An elegant radiance with a compassionate heart. Lover of warmth, family blessings, and timeless togetherness.",
      parents: "Sdn. Guljeet Kaur & Sdr. Manjeet Singh",
      grandparents: "Late Sdn. Harbhajan Kaur & Late Sdr. Kartar Singh Oboveja",
      image: "/images/amrit_simran_2d_couple_illustration.png"
    },
    hashtag: "#RajveerWedsLavleen",
    heading: "Rajveer weds Lavleen",
    subheading: "SINGH'S INVITATION"
  },
  weddingDateISO: "2026-11-01T09:30:00",
  formattedDate: "1 November 2026",
  city: "Beawar, Rajasthan",
  venueName: "Laaz Haveli, Beawar",
  gurbaniBlessing: {
    gurmukhi: "ਸੰਤਾ ਕੈ ਕਾਰਜਿ ਆਪਿ ਖਲੋਇਆ ॥ ਹਰਿ ਕੰਮੁ ਕਰਾਵਣਿ ਆਇਆ ਰਾਮ ॥",
    translation: "The Lord Himself has stood up to resolve the affairs of the Saints; He has come to complete their tasks."
  },
  events: [
    {
      id: "aarambh-akhand-path",
      name: "Aarambh Shri Akhand Path Sahib",
      tagline: "Inaugural Commencement of Sacred Recitation",
      date: "28 October 2026",
      formattedDate: "Wednesday, 28th October 2026",
      time: "10:00 AM",
      venue: "Gurudwara Sahib / Residence",
      address: "Beawar (Raj.)",
      city: "Beawar",
      dressCode: "Traditional / Modest (Head covering mandatory)",
      description: "Commencement of the 48-hour continuous reading of Sri Guru Granth Sahib Ji seeking divine blessings for the couple and families.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Aarambh+Akhand+Path+-+Rajveer+weds+Lavleen&dates=20261028T043000Z/20261028T063000Z&details=Aarambh+Shri+Akhand+Path+Sahib&location=Beawar"
    },
    {
      id: "sampati-kirtan-brunch",
      name: "Sampati Akhand Path Sahib & Kirtan",
      tagline: "Bhog, Divine Shabad Kirtan & Lunch Brunch",
      date: "30 October 2026",
      formattedDate: "Friday, 30th October 2026",
      time: "10:00 AM Sampati | 10:15 AM Kirtan | 11:30 AM Brunch",
      venue: "Gurudwara Sahib & LAAZ HAVELI",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "Traditional (Head covering mandatory at Gurudwara)",
      description: "10:00 AM Sampati Shri Akhand Path Sahib followed by Kirtan (10:15 AM - 11:15 AM) at Gurudwara Sahib, and Lunch/Brunch at Laaj Haveli (11:30 AM Onwards).",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sampati+Akhand+Path+and+Kirtan+-+Rajveer+weds+Lavleen&dates=20261030T043000Z/20261030T073000Z&details=Sampati+Shri+Akhand+Path+Sahib+and+Brunch&location=Beawar"
    },
    {
      id: "sagan-mehndi-cocktail",
      name: "Sagan, Mehndi & Cocktail",
      tagline: "Intricate Henna, Auspicious Sagan & Evening Celebration",
      date: "30 October 2026",
      formattedDate: "Friday, 30th October 2026",
      time: "8:00 PM Onwards",
      venue: "LAAZ HAVELI",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "Cocktail / Glitz & Glamour",
      description: "A Traditional Way Where Women Express Their Joy & Good Luck. Ladies Of \"Singh Family\" Embrace Your Presence To Fill This Scented Colour In Bride & Grooms Life.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sagan+Mehndi+Cocktail+-+Rajveer+weds+Lavleen&dates=20261030T143000Z/20261030T183000Z&details=Sagan+Mehndi+Cocktail+Night&location=Beawar"
    },
    {
      id: "pool-party",
      name: "Pool Party",
      tagline: "(Followed by Breakfast)",
      date: "31 October 2026",
      formattedDate: "Saturday, 31st October 2026",
      time: "8:00 AM Onwards",
      venue: "LAAZ HAVELI",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "SHADES OF PASTEL",
      description: "Let's Make a Splash! Come join us for a morning filled with sunshine, laughter, music & endless fun.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pool+Party+-+Rajveer+weds+Lavleen&dates=20261031T023000Z/20261031T050000Z&details=Pool+Party+and+Breakfast&location=Beawar"
    },
    {
      id: "haldi",
      name: "Haldi Ceremony",
      tagline: "(Theme: Yellow Colour)",
      date: "31 October 2026",
      formattedDate: "Saturday, 31st October 2026",
      time: "11:30 AM Onwards",
      venue: "LAAZ HAVELI",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "YELLOW COLOUR",
      description: "A vibrant ritual of auspicious turmeric paste, family laughter, blessings & golden hues.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Haldi+Ceremony+-+Rajveer+weds+Lavleen&dates=20261031T060000Z/20261031T093000Z&details=Haldi+Ceremony&location=Beawar"
    },
    {
      id: "ghadoli",
      name: "Ghadoli Ritual",
      tagline: "(Theme: Punjabi Touch)",
      date: "31 October 2026",
      formattedDate: "Saturday, 31st October 2026",
      time: "3:00 PM Onwards",
      venue: "LAAZ HAVELI",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "PUNJABI TOUCH",
      description: "A traditional Punjabi ritual where sisters & family fetch sacred water for the holy pre-wedding bath.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ghadoli+-+Rajveer+weds+Lavleen&dates=20261031T093000Z/20261031T120000Z&details=Ghadoli+Ceremony&location=Beawar"
    },
    {
      id: "baraat-departure",
      name: "Baraat Departure",
      tagline: "Grand Royal Wedding Procession",
      date: "31 October 2026",
      formattedDate: "Saturday, 31st October 2026",
      time: "8:00 PM Onwards",
      venue: "Residence to LAAZ HAVELI",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "Royal Festive / Formal",
      description: "Grand Baraat Departure from home to Laaj Haveli with dhol, brass band & joyous celebration.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Baraat+Departure+-+Rajveer+weds+Lavleen&dates=20261031T143000Z/20261031T180000Z&details=Baraat+Departure&location=Beawar"
    },
    {
      id: "anand-karaj",
      name: "Anand Karaj (Sacred Wedding)",
      tagline: "Holy Four Laavan Nuptials (Theme: Pink Colour)",
      date: "1 November 2026",
      formattedDate: "Sunday, 1st November 2026",
      time: "10:30 AM Onwards",
      venue: "Gurudwara Sahib & LAAZ HAVELI",
      address: "Station Road & Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "PINK COLOUR (Head covering mandatory)",
      description: "10:30 AM: Anand Karaj at Gurudwara Sahib (Theme: Pink colour). The solemn and divine union of two souls bound in holy matrimony through sacred Laavan.",
      iconName: "Heart",
      googleMapsUrl: "https://maps.app.goo.gl/PanroztgtnnRfbyLA?g_st=iw",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Anand+Karaj+-+Rajveer+weds+Lavleen&dates=20261101T050000Z/20261101T090000Z&details=Anand+Karaj+Wedding+Ceremony&location=Beawar"
    }
  ],
  storyMoments: [
    {
      id: "m1",
      title: "First Glance at Amrit Sarovar",
      date: "Spring 2024",
      location: "Amritsar, Punjab",
      description: "A serene afternoon in Amritsar. Amidst soothing Gurbani Kirtan and golden reflections, two eyes met, marking the commencement of a destiny written in heaven.",
      imageUrl: "/images/golden_temple_amrit_sarovar.png",
      caption: "The divine spark at the holy sarovar"
    },
    {
      id: "m2",
      title: "Roka & Family Union",
      date: "Autumn 2025",
      location: "Chandigarh",
      description: "With blessings from elders, sweet saffron mithai, and ringing laughter, both families came together to formalize the union of Rajveer & Lavleen.",
      imageUrl: "/images/golden_temple_vector_card.png",
      caption: "Surrounded by family love & blessings"
    },
    {
      id: "m3",
      title: "The Proposal at Sunset",
      date: "Summer 2026",
      location: "Kashmir Valley",
      description: "Under a canopy of chinar trees overlooking the tranquil waters of Dal Lake, Rajveer asked Lavleen to walk the path of life together forever.",
      imageUrl: "/images/amrit_simran_2d_couple_illustration.png",
      caption: "An eternal promise under Kashmir skies"
    },
    {
      id: "m4",
      title: "Together Towards Eternity",
      date: "1 November 2026",
      location: "Amritsar",
      description: "Now, as we step into our holy Anand Karaj, we invite you to be part of our most treasured moment.",
      imageUrl: "/images/amrit_simran_2d_couple_illustration.png",
      caption: "Ready for the sacred four Laavan"
    }
  ],
  preWeddingVideoUrl: "https://www.youtube-nocookie.com/embed/5qap5aO4i9A?rel=0&modestbranding=1",
  thingsToKnow: [
    {
      id: "venue-etiquette",
      title: "Sacred Ceremony Etiquette & Head Coverings",
      category: "etiquette",
      description: "Respecting the sacred ceremony protocol during the Anand Karaj.",
      icon: "ShieldCheck",
      details: [
        "Head covering is mandatory for both ladies and gentlemen (Rumaal/Chunni will be provided at the entrance).",
        "Please remove shoes before stepping into the main hall premises.",
        "Kindly dress modestly covering shoulders and knees.",
        "Alcohol and tobacco are strictly prohibited during sacred rituals."
      ]
    },
    {
      id: "stay-transport",
      title: "Accommodation & Transfers",
      category: "stay",
      description: "Ensuring a seamless and luxurious stay for all our guests.",
      icon: "Hotel",
      details: [
        "Complimentary luxury shuttle buses will run every 30 mins between Taj Swarna and the venue.",
        "Dedicated concierge desks will be present at Sri Guru Ram Dass Jee International Airport (ATQ).",
        "Valet parking is available at all event locations."
      ]
    },
    {
      id: "photography-reminder",
      title: "Photography & Unplugged Moments",
      category: "venue",
      description: "Capturing memories while preserving spiritual tranquility.",
      icon: "Camera",
      details: [
        "During the Laavan ceremony in the Darbar Sahib, please keep mobile phones on silent mode.",
        "Our official photography team will capture every moment. We invite you to be fully present with us.",
        "Feel free to take photos and tag us with #RajveerWedsLavleen during Mehndi and Reception!"
      ]
    },
    {
      id: "contact-help",
      title: "Guest Concierge & Helpdesk",
      category: "contact",
      description: "Have any questions? Our hospitality team is at your service.",
      icon: "PhoneCall",
      details: [
        "Wedding Coordinator: +91 98765 43210",
        "Hospitality Manager: +91 98123 45678",
        "RSVP Manager: rsvp@rajveerwedslavleen.com"
      ]
    }
  ],
  initialWishes: [
    {
      id: "w1",
      name: "Gurpreet & Tavleen Singh",
      relation: "Family Friends",
      message: "May Waheguru Ji bless Rajveer & Lavleen with endless laughter, boundless health, and deep spiritual harmony! Can't wait to dance at the Sangeet!",
      timestamp: "2 hours ago",
      likes: 12
    },
    {
      id: "w2",
      name: "Dr. Amrit & Simran Ahluwalia",
      relation: "Cousins",
      message: "Sending all our love and warmest wishes from London! So thrilled for this beautiful royal union. See you in Amritsar!",
      timestamp: "Yesterday",
      likes: 8
    },
    {
      id: "w3",
      name: "Karan Johar & Friends",
      relation: "Close Friends",
      message: "Rajveer and Lavleen, you look like a dream together! Wishing you a lifetime of blockbuster happiness, peace, and togetherness!",
      timestamp: "3 days ago",
      likes: 24
    }
  ],
  contacts: [
    { name: "Sdr. Manjeet Singh", relation: "Father of the Bride", phone: "+91 98765 11111" },
    { name: "Harpreet Singh", relation: "Father of the Groom", phone: "+91 98765 22222" },
    { name: "Wedding Helpdesk", relation: "Concierge / RSVP", phone: "+91 98765 33333" }
  ],
  audioTrack: {
    title: "Sacred Anand Karaj Raga (Soft Shehnai & Sitar)",
    artist: "Traditional Instrumental",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-meditation-soft-sitar-112398.mp3"
  }
};

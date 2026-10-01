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
      parents: "Late Sdn. Harpreet Kaur & S. Surinder Singh Ji",
      grandparents: "Sdn. Karmawali & Lt. S. Balbeer Singh Ji",
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
      id: "kirtan-darbaar",
      name: "Kirtan Darbaar & Lunch Brunch",
      tagline: "Gurbani, Shabad & Divine Blessings by Bhai Jagdeep Singh Ji, Delhi",
      date: "18 October 2026",
      formattedDate: "Sunday, 18th October 2026",
      time: "8:30 AM Kirtan | 11:15 AM Lunch Brunch",
      venue: "Gurudwara Sahib & Laaz Haveli",
      address: "Station Road & Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "All Colours",
      description: "Let us come together in the sacred presence of Sri Guru Granth Sahib Ji and immerse our hearts in the soothing melodies of Gurbani.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.google.com/?q=Beawar+Rajasthan",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kirtan+Darbaar+-+Manbeer+weds+Riti&dates=20261018T030000Z/20261018T070000Z&details=Kirtan+Darbaar+and+Lunch+Brunch&location=Beawar"
    },
    {
      id: "mehandi",
      name: "Mehandi",
      tagline: "Intricate Henna, Good Luck & Scented Colours",
      date: "18 October 2026",
      formattedDate: "Sunday, 18th October 2026",
      time: "1:15 PM Onwards",
      venue: "Laaz Haveli",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "All Colours",
      description: "A traditional way where women express their joy & good luck. Ladies of Singh Family embrace your presence.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.google.com/?q=Beawar+Rajasthan",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehandi+-+Manbeer+weds+Riti&dates=20261018T074500Z/20261018T120000Z&details=Mehandi+Ceremony&location=Beawar"
    },
    {
      id: "sangeet-night",
      name: "Sangeet Night",
      tagline: "Music, Laughter, Dance & Unforgettable Moments (Followed by Dinner)",
      date: "18 October 2026",
      formattedDate: "Sunday, 18th October 2026",
      time: "7:30 PM Onwards",
      venue: "Laaz Haveli",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "Black Glitz",
      description: "Get ready for an enchanting evening filled with music, dance & unforgettable moments as we celebrate together with loved ones.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.google.com/?q=Beawar+Rajasthan",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sangeet+Night+-+Manbeer+weds+Riti&dates=20261018T140000Z/20261018T180000Z&details=Sangeet+Night+and+Dinner&location=Beawar"
    },
    {
      id: "anand-karaj",
      name: "Anand Karaj (Sacred Wedding)",
      tagline: "Holy Four Laavan Nuptials by Bhai Jagdeep Singh Ji, Delhi",
      date: "20 October 2026",
      formattedDate: "Tuesday, 20th October 2026",
      time: "10:30 AM Onwards",
      venue: "Gurudwara Sahib",
      address: "Station Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "Shades of Green (Head covering mandatory)",
      description: "The solemn and divine union of two souls bound in holy matrimony through sacred Laavan, by grace of Sri Guru Granth Sahib Ji.",
      iconName: "Heart",
      googleMapsUrl: "https://maps.google.com/?q=Beawar+Rajasthan",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Anand+Karaj+-+Manbeer+weds+Riti&dates=20261020T050000Z/20261020T090000Z&details=Anand+Karaj+Wedding+Ceremony&location=Beawar"
    },
    {
      id: "reception",
      name: "Wedding Reception",
      tagline: "A Celebration of Love & Togetherness (Followed by Dinner)",
      date: "19 October 2026",
      formattedDate: "Monday, 19th October 2026",
      time: "8:00 PM Onwards",
      venue: "Laaz Haveli",
      address: "Mill Road, Beawar (Raj.)",
      city: "Beawar",
      dressCode: "Royal Formal / Couture",
      description: "With hearts full of joy, we invite you to grace the evening as the couple celebrate the beginning of their beautiful journey together.",
      iconName: "GlassWater",
      googleMapsUrl: "https://maps.google.com/?q=Beawar+Rajasthan",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+-+Manbeer+weds+Riti&dates=20261019T143000Z/20261019T183000Z&details=Grand+Wedding+Reception&location=Beawar"
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
    { name: "S. Gurinder Singh Dhillon", relation: "Father of the Bride", phone: "+91 98765 11111" },
    { name: "S. Harpreet Singh Ahluwalia", relation: "Father of the Groom", phone: "+91 98765 22222" },
    { name: "Simran Kaur Dhillon", relation: "Sister of the Bride", phone: "+91 98765 33333" }
  ],
  audioTrack: {
    title: "Sacred Anand Karaj Raga (Soft Shehnai & Sitar)",
    artist: "Traditional Instrumental",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-meditation-soft-sitar-112398.mp3"
  }
};

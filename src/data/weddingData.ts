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
      firstName: "Ranbir",
      fullName: "Ranbir Singh Ahluwalia",
      title: "The Groom",
      about: "A gentleman of warmth and quiet grace. Devoted to family heritage, soulful music, and building a life grounded in love and faith.",
      parents: "S. Harpreet Singh Ahluwalia & Smt. Jasleen Kaur Ahluwalia",
      grandparents: "Late S. Avtar Singh Ahluwalia & Late Smt. Kuldeep Kaur Ahluwalia",
      image: "/images/anand_karaj_palki_couple.png"
    },
    bride: {
      firstName: "Alia",
      fullName: "Alia Kaur Dhillon",
      title: "The Bride",
      about: "An elegant radiance with a compassionate heart. Lover of classical ragas, vibrant Phulkari textures, and warm family gatherings.",
      parents: "S. Gurinder Singh Dhillon & Smt. Manpreet Kaur Dhillon",
      grandparents: "Late S. Inderjit Singh Dhillon & Late Smt. Surjit Kaur Dhillon",
      image: "/images/couple_memory.png"
    },
    hashtag: "#RanbirWedsAlia",
    heading: "Ranbir weds Alia",
    subheading: "A CELEBRATION OF LOVE"
  },
  weddingDateISO: "2027-01-31T09:30:00",
  formattedDate: "31 January 2027",
  city: "Amritsar, Punjab",
  venueName: "Gurdwara Sri Harmandir Sahib & The Royal Palms Ballroom",
  gurbaniBlessing: {
    gurmukhi: "ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ ॥ ਧਨੁ ਪਿਰੁ ਏਹਿ ਨ ਆਖੀਅਨਿ ਬਹਨਿ ਇਕਠੇ ਹੋਇ ॥ ਏਕ ਜੋਤੀ ਦੁਇ ਮੂਰਤੀ ਧਨੁ ਪਿਰੁ ਕਹੀਐ ਸੋਇ ॥",
    translation: "They are not said to be husband and wife, who merely sit together. They alone are called husband and wife, who have one light in two bodies."
  },
  events: [
    {
      id: "mehndi-sangeet",
      name: "Mehndi & Sangeet Night",
      tagline: "Intricate Henna, Jaggo Beats & Royal Festivities",
      date: "29 January 2027",
      formattedDate: "Friday, 29 January 2027",
      time: "5:00 PM Onwards",
      venue: "The Heritage Royal Courtyard",
      address: "Mall Road, Amritsar, Punjab",
      city: "Amritsar",
      dressCode: "Festive Punjabi Ethnic / Emerald Green & Mustard",
      description: "An enchanting evening adorned with traditional henna, brass Jaggo lanterns, aromatic spices, live dholki, and joyous dancing under starlit skies.",
      iconName: "Sparkles",
      googleMapsUrl: "https://maps.google.com/?q=Amritsar+Punjab",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehndi+%26+Sangeet+Night+-+Ranbir+weds+Alia&dates=20270129T113000Z/20270129T180000Z&details=Mehndi+and+Sangeet+Celebrations&location=Amritsar"
    },
    {
      id: "anand-karaj",
      name: "Anand Karaj (Sacred Wedding)",
      tagline: "The Holy Four Laavan Nuptials",
      date: "31 January 2027",
      formattedDate: "Sunday, 31 January 2027",
      time: "9:30 AM Kirtan | 10:30 AM Anand Karaj",
      venue: "Gurdwara Sahib & The Imperial Lawns",
      address: "Grand Trunk Road, Amritsar, Punjab",
      city: "Amritsar",
      dressCode: "Royal Pastels & Velvet Ethnic (Head covering mandatory)",
      description: "The solemn and divine union of two souls bound in holy matrimony through four sacred Laavan circumambulations around Sri Guru Granth Sahib Ji, followed by Guru Ka Langar.",
      iconName: "Heart",
      googleMapsUrl: "https://maps.google.com/?q=Sri+Harmandir+Sahib+Amritsar",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Anand+Karaj+-+Ranbir+weds+Alia&dates=20270131T040000Z/20270131T080000Z&details=Anand+Karaj+Wedding+Ceremony&location=Amritsar"
    },
    {
      id: "reception",
      name: "The Royal Reception Gala",
      tagline: "An Evening of Elegance, Toasts & Dancing",
      date: "31 January 2027",
      formattedDate: "Sunday, 31 January 2027",
      time: "7:00 PM Onwards",
      venue: "Grand Imperial Ballroom",
      address: "Taj Swarna Estate, Amritsar, Punjab",
      city: "Amritsar",
      dressCode: "Black Tie / Royal Formal Couture",
      description: "A glamorous celebration of eternal togetherness featuring champagne toasts, acoustic violin performances, gourmet dinner, and a night of dancing.",
      iconName: "GlassWater",
      googleMapsUrl: "https://maps.google.com/?q=Taj+Swarna+Amritsar",
      calendarLink: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reception+Gala+-+Ranbir+weds+Alia&dates=20270131T133000Z/20270131T190000Z&details=Grand+Reception+Gala&location=Taj+Swarna+Amritsar"
    }
  ],
  storyMoments: [
    {
      id: "m1",
      title: "First Glance at Amrit Sarovar",
      date: "Spring 2024",
      location: "Amritsar, Punjab",
      description: "A serene afternoon at the Golden Temple. Amidst soothing Gurbani Kirtan and golden reflections, two eyes met, marking the commencement of a destiny written in heaven.",
      imageUrl: "/images/golden_temple_amrit_sarovar.png",
      caption: "The divine spark at the holy sarovar"
    },
    {
      id: "m2",
      title: "Roka & Family Union",
      date: "Autumn 2025",
      location: "Chandigarh",
      description: "With blessings from elders, sweet saffron mithai, and ringing laughter, both families came together to formalize the union of Ranbir & Alia.",
      imageUrl: "/images/golden_temple_vector_card.png",
      caption: "Surrounded by family love & blessings"
    },
    {
      id: "m3",
      title: "The Proposal at Sunset",
      date: "Summer 2026",
      location: "Kashmir Valley",
      description: "Under a canopy of chinar trees overlooking the tranquil waters of Dal Lake, Ranbir asked Alia to walk the path of life together forever.",
      imageUrl: "/images/anand_karaj_palki_couple.png",
      caption: "An eternal promise under Kashmir skies"
    },
    {
      id: "m4",
      title: "Together Towards Eternity",
      date: "31 January 2027",
      location: "Amritsar",
      description: "Now, as we step into our holy Anand Karaj, we invite you to be part of our most treasured moment.",
      imageUrl: "/images/couple_memory.png",
      caption: "Ready for the sacred four Laavan"
    }
  ],
  preWeddingVideoUrl: "https://www.youtube-nocookie.com/embed/5qap5aO4i9A?rel=0&modestbranding=1",
  thingsToKnow: [
    {
      id: "venue-etiquette",
      title: "Gurdwara Etiquette & Head Coverings",
      category: "etiquette",
      description: "Respecting the sacred Gurdwara protocol during the Anand Karaj.",
      icon: "ShieldCheck",
      details: [
        "Head covering is mandatory for both ladies and gentlemen (Rumaal/Chunni will be provided at the entrance).",
        "Please remove shoes and socks before stepping into the Gurdwara premises.",
        "Kindly dress modestly covering shoulders and knees.",
        "Alcohol and tobacco are strictly prohibited on Gurdwara grounds."
      ]
    },
    {
      id: "stay-transport",
      title: "Accommodation & Transfers",
      category: "stay",
      description: "Ensuring a seamless and luxurious stay for all our guests.",
      icon: "Hotel",
      details: [
        "Complimentary luxury shuttle buses will run every 30 mins between Taj Swarna and the Gurdwara venue.",
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
        "Feel free to take photos and tag us with #RanbirWedsAlia during Mehndi and Reception!"
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
        "RSVP Manager: rsvp@ranbirwedsalia.com"
      ]
    }
  ],
  initialWishes: [
    {
      id: "w1",
      name: "Gurpreet & Tavleen Singh",
      relation: "Family Friends",
      message: "May Waheguru Ji bless Ranbir & Alia with endless laughter, boundless health, and deep spiritual harmony! Can't wait to dance at the Sangeet!",
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
      message: "Ranbir and Alia, you look like a dream together! Wishing you a lifetime of blockbuster happiness, peace, and togetherness!",
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

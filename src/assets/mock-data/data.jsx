

// import CarBlue from '@/assets/images/medicine.jpg'
import medicine from "@/assets/images/medicine.jpg";
import bandage from "@/assets/images/bandage.jpg";
import drip from "@/assets/images/drip.jpg";

export const dummyData = [
  {
    conversation_Id: 1,
    conv_slug:
      'important-discussion-about-project-deliverables-and-deadlines-for-success'
  },
  {
    conversation_Id: 2,
    conv_slug: 'weekly-meeting-agenda-focused-on-team-progress-and-new-goals'
  },
  {
    conversation_Id: 3,
    conv_slug: 'client-feedback-on-recent-updates-for-their-app-interface'
  },
  {
    conversation_Id: 4,
    conv_slug:
      'brainstorming-session-for-marketing-strategy-and-social-media-campaigns'
  },
  {
    conversation_Id: 5,
    conv_slug: 'finalizing-details-of-product-launch-event-and-invite-list'
  },
  {
    conversation_Id: 6,
    conv_slug: 'resolving-technical-issues-reported-by-users-on-live-platform'
  },
  {
    conversation_Id: 7,
    conv_slug:
      'reviewing-financial-statements-and-budget-for-next-quarter-plans'
  },
  {
    conversation_Id: 8,
    conv_slug:
      'team-collaboration-on-design-enhancements-for-upcoming-website-release'
  }
]

export const sidebar = [
  {
    id: 1,
    title: 'Delivery Analytics',
    link: '/dashboard'
    // icon:<DashboardIcon/>
  },
  {
    id: 2,
    title: 'Ai Assistant',
    link: '/aiassistant'
    // icon:<AssistantIcon/>
  },

  {
    id: 3,
    title: 'Revenue Analytics',
    link: '/revenue-analytics'
  },
  {
    id: 4,
    title: 'Order Analytics',
    link: '/order-analytics'
  },
  {
    id: 5,
    title: 'Performance Analytics',
    link: '/performance-analytics'
  },
    {
    id: 6,
    title: 'Bussiness Categories',
    link: '/bussiness-categories'
  },
  {
    id: 7,
    title: 'Booking',
    link: '/booking'
  },

  {
    id: 8,
    title: 'billing',
    link: '/billing'
    // icon:<BillingIcon/>
  },

  {

    id:9,
    title:'Tracking',
    link:'/tracking'
  }
]


export const CartItem=[
  {
    id:1,
    img:medicine,
    productName:"Medicine",
    productPrice:123,
    productDescrption:"My Deal 1 Savour Krispo, 1 Chicken Piece, 1 French Fries & 1 Drink"
  },
   {
    id:2,
    img:bandage,
    productName:"Bandage",
    productPrice:456,
    productDescrption:"My Deal 1 Savour Krispo, 1 Chicken Piece, 1 French Fries & 1 Drink"
  },
   {
    id:3,
    img:drip,
    productName:"Drip",
    productPrice:789,
    productDescrption:"My Deal 1 Savour Krispo, 1 Chicken Piece, 1 French Fries & 1 Drink"
  },
   {
    id:4,
    img:bandage,
    productName:"Bandage",
    productPrice:789,
    productDescrption:"My Deal 1 Savour Krispo, 1 Chicken Piece, 1 French Fries & 1 Drink"
  },
   {
    id:5,
    img:drip,
    productName:"Drip",
    productPrice:789,
    productDescrption:"My Deal 1 Savour Krispo, 1 Chicken Piece, 1 French Fries & 1 Drink"
  },
   {
    id:6,
    img:medicine,
    productName:"Medicine",
    productPrice:789,
    productDescrption:"My Deal 1 Savour Krispo, 1 Chicken Piece, 1 French Fries & 1 Drink"
  },
  
]

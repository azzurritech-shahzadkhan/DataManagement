import { AssistantIcon, BillingIcon, DashboardIcon } from "../dashboard-icons/DashboardIcon";


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
];


export const sidebar=[
    {
        id:1,
        title:"Dashboard",
        link:"/dashboard",
        // icon:<DashboardIcon/>

    },
    {
        id:2,
        title:"Ai Assistant",
        link:"/aiassistant",
      // icon:<AssistantIcon/>
    },
    {
        id:3,
        title:"billing",
        link:"/billing",
        // icon:<BillingIcon/>

    },
    {
        id:4,
        title:"Bussiness Categories",
        link:"/bussiness-categories",
        
    },
    {
        id:5,
        title:"Booking",
        link:"/booking"
    },
    {
        id:6,
        title:"Revenue Analytics",
        link:"/revenue-analytics"
    }
    ,{
      id:7,
      title:"Order Analytics",
      link:"/order-analytics"
    },
    {
      id:8,
      title:"Performance Analytics",
      link:"/performance-analytics"
    }

]

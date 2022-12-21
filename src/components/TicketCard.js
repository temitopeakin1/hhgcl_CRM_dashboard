import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteCard from "./DeleteCard"
import { Link } from "react-router-dom"

const TicketCard = ({color, ticket}) => {
  return (
    <div className="ticket-card">       
       <div className="ticket-color" style={{ backgroundColor: color }}></div>
    <Link to={`/ticket/${ticket.documentId}`} id="link">
    <div className="ticket-color"></div>
     <h3>{ticket.title}</h3>
      <AvatarDisplay ticket={ticket}/>
      <StatusDisplay status={ticket.status} />
      <PriorityDisplay priority={Number(ticket.priority)} />
      <ProgressDisplay progress={Number(ticket.progress)} />
      </Link>
      <DeleteCard documentId={ticket.progress} /> 
    </div> 
  )
}

export default TicketCard 

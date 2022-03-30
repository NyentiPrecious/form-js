import Navbar from "./Navbar"
import Section from "./Section"
import './Task1Style.css'

export default function Task1(params) {
    return(
        <div>
            <Navbar></Navbar>                                                                                                                                                                                                                                      

            <Section columns={4}></Section>
            <Section columns={3}></Section>
            <Section columns={3}></Section>
            
        </div>
    )
}
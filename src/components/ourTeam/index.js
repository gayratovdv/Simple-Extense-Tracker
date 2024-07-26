import React from 'react'
import Container from '../Container/Container'
import firstMember from '../../Assets/first member image.jpg'
import secondMember from '../../Assets/second member image.jpg'
import thirdMember from '../../Assets/third member image.jpg'
import fourthMember from '../../Assets/fourth member image.jpg'
import fifthMember from '../../Assets/fifth member image.jpg'
import sixthMember from '../../Assets/sixth member image.jpg'
import "./style.scss"

const ourTeam = () => {
  return (
    <Container>
      <div class="section our-team">
            <h2>Jamoamiz:</h2>
            <div class="team">
                <div class="team-member">
                    <img src={firstMember} alt="Jamoa a'zosi 1"/>
                    <h3>Gayratov Javohir</h3>
                    <p>Team Leader</p>
                    <p>Men esa...</p>
                </div>
                <div class="team-member">
                    <img src={secondMember} alt="Jamoa a'zosi 2"/>
                    <h3>Atayev Zarif</h3>
                    <p>Front End Dasturchi</p>
                    <p>Zarif judaham Frontni yaxshi biladi</p>
                </div>
                <div class="team-member">
                    <img src={thirdMember} alt="Jamoa a'zosi 3"/>
                    <h3>Baxtiyorov Bahouddin</h3>
                    <p>Front End va Designer</p>
                    <p>Bahouddin Front va Designda juda ajoyib</p>
                </div>
                <div class="team-member">
                    <img src={fourthMember} alt="Jamoa a'zosi 3"/>
                    <h3>Nurmahammedov Umar</h3>
                    <p>Back End Dasturchi</p>
                    <p>Umar yosh bo'lishiga qaramasdan juda ham aqlli</p>
                </div>
                <div class="team-member">
                    <img src={fifthMember} alt="Jamoa a'zosi 3"/>
                    <h3>Maxmudova Madinaxon</h3>
                    <p>Front End Dasturchi</p>
                    <p>.....</p>
                </div>
                <div class="team-member">
                    <img src={sixthMember} alt="Jamoa a'zosi 3"/>
                    <h3>Alisherova Nasiba</h3>
                    <p>Front End Dasturchi</p>
                    <p>......</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ourTeam

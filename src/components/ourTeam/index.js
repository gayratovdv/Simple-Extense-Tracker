import React from 'react'
import Container from '../Container/Container'
import firstMember from '../../Assets/first member image.jpg'
import secondMember from '../../Assets/second member image.jpg'
import thirdMember from '../../Assets/third member image.jpg'

const ourTeam = () => {
  return (
    <Container>
      <div class="section our-team">
            <h2>Jamoamiz:</h2>
            <div class="team">
                <div class="team-member">
                    <img src={firstMember} alt="Jamoa a'zosi 1"/>
                    <h3>Gayratov Javohir</h3>
                    <p>Lavozimi</p>
                    <p>Qisqacha biografiya yoki rol haqida ma'lumot.</p>
                </div>
                <div class="team-member">
                    <img src={secondMember} alt="Jamoa a'zosi 2"/>
                    <h3>Atayev Zarif</h3>
                    <p>Lavozimi</p>
                    <p>Qisqacha biografiya yoki rol haqida ma'lumot.</p>
                </div>
                <div class="team-member">
                    <img src={thirdMember} alt="Jamoa a'zosi 3"/>
                    <h3>Baxtiyorov Bahouddin</h3>
                    <p>Lavozimi</p>
                    <p>Qisqacha biografiya yoki rol haqida ma'lumot.</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ourTeam

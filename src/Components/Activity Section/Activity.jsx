import React from 'react'
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import user from '../../assets/user1.jpg'
import user1 from '../../assets/r1.jpg'
import user4 from '../../assets/r4.jpg'
import user3 from '../../assets/r3.jpg'
import user5 from '../../assets/r2.jpg'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Customer Image" />
          <div className="customerDetails">
          <span className="name">Ola Martha</span>
          <small>Ordered a new plant</small>
          </div>
          <div className="duration">
          2 min ago
        </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
          <span className="name">Robin benjo</span>
          <small>Ordered a new plant</small>
          </div>
          <div className="duration">
          5 min ago
        </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
          <span className="name">Brayan leo</span>
          <small>Ordered a new plant</small>
          </div>
          <div className="duration">
          3 min ago
        </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
          <span className="name">Latham Duke</span>
          <small>Ordered a new plant</small>
          </div>
          <div className="duration">
          7 min ago
        </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
          <span className="name">Alisa Fernandez</span>
          <small>Ordered a new plant</small>
          </div>
          <div className="duration">
          4 min ago
        </div>
        </div>

      </div>
    </div>
  )
}

export default Activity
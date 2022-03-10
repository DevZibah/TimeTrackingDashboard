import React, { useState, useEffect } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import workimg from '../assets/icon-work.svg'
import playimg from '../assets/icon-play.svg'
import studyimg from '../assets/icon-study.svg'
import exerciseimg from '../assets/icon-exercise.svg'
import socialimg from '../assets/icon-social.svg'
import selfcareimg from '../assets/icon-self-care.svg'
import ellipsis from '../assets/icon-ellipsis.svg'
const Daily = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    fetch('/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        setData(myJson)
        setLoading(false)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  console.log(data)
  const work = data.filter((item) => {
    return item.title === 'Work'
  })
  const play = data.filter((item) => {
    return item.title === 'Play'
  })
  const study = data.filter((item) => {
    return item.title === 'Study'
  })
  const exercise = data.filter((item) => {
    return item.title === 'Exercise'
  })
  const social = data.filter((item) => {
    return item.title === 'Social'
  })
  const selfcare = data.filter((item) => {
    return item.title === 'Self Care'
  })
  return (
    <div className='dailyweeklymonthly'>
      {loading === false && (
        <Fragment>
          <div className='work worrk'>
            <div className='workimg'>
              <img src={workimg} alt='' />
            </div>
            {work.map((item, key) => {
              return (
                <div key={key} className='curprev'>
                  <div className='grid'>
                    <div>{item.title}</div>
                    <div>
                      <img src={ellipsis} alt='ellipsis' />
                    </div>
                  </div>
                  <div className='grid1'>
                    <div>
                      <p className='previous'>
                        {item.timeframes.daily.previous} hrs
                      </p>
                    </div>
                    <div>
                      <p className='current'>
                        Last Week - {item.timeframes.daily.current} hrs
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='work mt-5 play'>
            <div className='workimg'>
              <img src={playimg} alt='' />
            </div>
            {play.map((item, key) => {
              return (
                <div key={key} className='curprev'>
                  <div className='grid'>
                    <div>{item.title}</div>
                    <div>
                      <img src={ellipsis} alt='ellipsis' />
                    </div>
                  </div>
                  <div className='grid1'>
                    <div>
                      <p className='previous'>
                        {item.timeframes.daily.previous} hrs
                      </p>
                    </div>
                    <div>
                      <p className='current'>
                        Last Week - {item.timeframes.daily.current} hrs
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='work mt-5 study'>
            <div className='workimg'>
              <img src={studyimg} alt='' />
            </div>
            {study.map((item, key) => {
              return (
                <div key={key} className='curprev'>
                  <div className='grid'>
                    <div>{item.title}</div>
                    <div>
                      <img src={ellipsis} alt='ellipsis' />
                    </div>
                  </div>
                  <div className='grid1'>
                    <div>
                      <p className='previous'>
                        {item.timeframes.daily.previous} hrs
                      </p>
                    </div>
                    <div>
                      <p className='current'>
                        Last Week - {item.timeframes.daily.current} hrs
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='work mt-5 exercise'>
            <div className='workimg'>
              <img src={exerciseimg} alt='' />
            </div>
            {exercise.map((item, key) => {
              return (
                <div key={key} className='curprev cp'>
                  <div className='grid'>
                    <div>{item.title}</div>
                    <div>
                      <img src={ellipsis} alt='ellipsis' />
                    </div>
                  </div>
                  <div className='grid1'>
                    <div>
                      <p className='previous'>
                        {item.timeframes.daily.previous} hrs
                      </p>
                    </div>
                    <div>
                      <p className='current'>
                        Last Week - {item.timeframes.daily.current} hrs
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='work mt-5 social'>
            <div className='workimg'>
              <img src={socialimg} alt='' />
            </div>
            {social.map((item, key) => {
              return (
                <div key={key} className='curprev cp-one'>
                  <div className='grid'>
                    <div>{item.title}</div>
                    <div>
                      <img src={ellipsis} alt='ellipsis' />
                    </div>
                  </div>
                  <div className='grid1'>
                    <div>
                      <p className='previous'>
                        {item.timeframes.daily.previous} hrs
                      </p>
                    </div>
                    <div>
                      <p className='current'>
                        Last Week - {item.timeframes.daily.current} hrs
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='work mt-5 selfcare'>
            <div className='workimg'>
              <img src={selfcareimg} alt='' />
            </div>
            {selfcare.map((item, key) => {
              return (
                <div key={key} className='curprev'>
                  <div className='grid'>
                    <div>{item.title}</div>
                    <div>
                      <img src={ellipsis} alt='ellipsis' />
                    </div>
                  </div>
                  <div className='grid1'>
                    <div>
                      <p className='previous'>
                        {item.timeframes.daily.previous} hrs
                      </p>
                    </div>
                    <div>
                      <p className='current'>
                        Last Week - {item.timeframes.daily.current} hrs
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Daily

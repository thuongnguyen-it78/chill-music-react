/* eslint-disable no-unused-vars */
import React from 'react'
import './SongItem.scss'
// import img from '../../assets/img/artist.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { songClick } from '../../actions/playMusic'

SongItem.propTypes = {}

function SongItem({ song, current }) {
    const dispatch = useDispatch()
    const isPlaying = useSelector((state) => state.playMusicReducer.isPlaying)
    const url = `url(${song.image})`
    const urlPlay = `url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/icon-playing.gif)`

    const handleSongClick = (id) => {
        return () => {
            dispatch(songClick(id))
        }
    }

    return (
        <div className="song-item">
            <Link to="" className="song-item__img" style={{ backgroundImage: url }} onClick={handleSongClick(song.id)}>
                <div className="song-item__opacity"></div>
                {current && isPlaying && (
                    <i className="action-play song-item__play" style={{ backgroundImage: urlPlay }}></i>
                )}
                {current && !isPlaying && <i class="fas fa-play song-item__play song-item__play--active"></i>}
                {!current && <i class="fas fa-play song-item__play"></i>}
            </Link>

            <div className="song-item__info">
                <h3 className="song-item__name">{song.title}</h3>

                <div className="artist-list">
                    {song.artists.split('-').map((artist) => {
                        return <Link to="">{artist.trim()}</Link>
                    })}
                </div>
            </div>
            <div className="song-item__others">
                <button>
                    {/* <i class="fas fa-heart"></i> */}
                    <i class="fal fa-heart"></i>
                </button>
                <button>
                    <i class="far fa-ellipsis-h"></i>
                </button>
            </div>
        </div>
    )
}

export default SongItem

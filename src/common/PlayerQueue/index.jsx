/* eslint-disable no-unused-vars */
import classnames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import ListSongsBack from '../ListSongsBack'
import ListSongsFront from '../ListSongsFront'
import SongItem from '../SongItem'
import './PlayerQueue.scss'

PlayerQueue.propTypes = {}

function PlayerQueue() {
    const isOpen = useSelector((state) => state.playMusicReducer.isOpen)
    const songs = useSelector((state) => state.playMusicReducer.songs)
    const currentIndex = useSelector((state) => state.playMusicReducer.currentIndex)

    const frontSongs = songs.slice(0, currentIndex + 1)
    const backSongs = songs.slice(currentIndex + 1)

    return (
        <div className={classnames('player-queue', { 'player-queue--active': isOpen })}>
            <h3 className="queue-title">Danh sách phát</h3>

            <div className="front-songs">
                {frontSongs.map((song, index) => (
                    <SongItem index={index} song={song} />
                ))}
            </div>

            <div className="back-songs">
                <h4 className="back-songs__title">Tiếp theo...</h4>
                {backSongs.map((song, index) => (
                    <SongItem index={index} song={song} />
                ))}
            </div>
        </div>
    )
}

export default PlayerQueue

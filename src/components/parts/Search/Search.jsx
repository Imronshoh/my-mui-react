import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import './Search.css'
import Button from '@mui/material/Button';
import img from '../../../images/SVG.png'
import CustomizedProgressBars from '../Progress/Progress';
import BasicTable from '../Visits/Visits';
import BasicTable1 from '../Pages/Pages';
import BasicPie from '../Bar/Bar';

function Search() {
    return (
        <div>
            <header className="header">
                <ul className="search__list">
                    <SearchIcon className='SearchIcon' />
                    <div className="list__search">
                        <FlagIcon className='SearchIcon1' />
                        <Badge badgeContent={2} color="primary" className='SearchIcon1'>
                            <MailIcon color="action" />
                        </Badge>
                        <PeopleAltOutlinedIcon className='SearchIcon1' />
                    </div>
                </ul>
            </header>
            <section className="analytics">
                <div className="main__tics">
                    <h1>Analytics</h1>
                    <Button color="primary" variant="contained">+ New Dashboard</Button>
                </div>
                <ul className="list__of__analytics">
                    <li>
                        <div>
                            <p>Impressions</p>
                            <span>36,6K</span>
                            <button>See sources</button>
                        </div>
                        <img src={img} alt={img} />
                    </li>
                    <li>
                        <div>
                            <p>Impressions</p>
                            <span>36,6K</span>
                            <button>See sources</button>
                        </div>
                        <img src={img} alt={img} />
                    </li>
                    <li>
                        <div>
                            <p>Impressions</p>
                            <span>36,6K</span>
                            <button>See sources</button>
                        </div>
                        <img src={img} alt={img} />
                    </li>
                </ul>
            </section>
            <div className="ota">
                <section className="sources">
                    <h1>Traffic Sources</h1>
                    <CustomizedProgressBars />
                    <CustomizedProgressBars />
                    <CustomizedProgressBars />
                    <CustomizedProgressBars />
                    <CustomizedProgressBars />
                    <CustomizedProgressBars />
                    <CustomizedProgressBars />
                </section>
                <section className="visits">
                    <h1>Visits by Country</h1>
                    <br />
                    <hr />

                    <BasicTable />
                </section>
            </div>
            <div className="ota">
                <section className="pages">
                    <h1>Most Visited Pages</h1>
                    <br /><hr />
                    <BasicTable1 />
                </section>
                <section className="pie">
                    <h1>Social Media Sources</h1>
                    <BasicPie />
                </section>
            </div>
        </div>
    )
}

export default Search
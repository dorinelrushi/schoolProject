import React from "react";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { BsCalendar4Event } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoSchoolOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { useRouter } from "next/router";
import { FaUserLarge } from "react-icons/fa6";

function LeftNav() {
  const router = useRouter();

  return (
    <div>
      <div>
        <ul className="flex flex-col gap-[8px]">
          <NavLink href="/Dashboard" router={router}>
            <MdSpaceDashboard className="navLogo" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink href="/Event" router={router}>
            <BsCalendar4Event className="navLogo" />
            <span>Events</span>
          </NavLink>
          {/* */}
          <NavLink href=" /Reviewers" router={router}>
            <FaUserLarge className="navLogo" />
            <span>Reviewers</span>
          </NavLink>
          <NavLink href="/Volunteers" router={router}>
            <FaUserLarge className="navLogo" />
            <span>Volunteers</span>
          </NavLink>
          <NavLink href="/Attendance" router={router}>
            <FaUserLarge className="navLogo" />
            <span>Attendance</span>
          </NavLink>
          <NavLink href="/GuestSpeakers" router={router}>
            <FaUserLarge className="navLogo" />
            <span>Guest Speakers</span>
          </NavLink>
          {/* */}
          <NavLink href="/Profile" router={router}>
            <CiUser className="navLogo" />
            <span>Profile</span>
          </NavLink>
          <NavLink href="/College" router={router}>
            <IoSchoolOutline className="navLogo" />
            <span>College</span>
          </NavLink>
          <NavLink href="/Sponsors" router={router}>
            <FaUsers className="navLogo" />
            <span>Sponsors</span>
          </NavLink>
          <NavLink href="/ReviewProject" router={router}>
            <MdOutlineRateReview className="navLogo" />
            <span>Review Projects</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

const NavLink = ({ href, router, children }) => {
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <li className={`link ${isActive ? "active" : ""}`}>{children}</li>
    </Link>
  );
};

export default LeftNav;

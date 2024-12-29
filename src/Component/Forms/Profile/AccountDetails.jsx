import React from "react";
import { Check, Mail, Verified } from "lucide-react";
import { Tooltip } from "antd";

const AccountDetails = ({ profileData }) => {
  return (
    <div className="flex flex-col items-center w-full p-5 mt-[5em]">
      <div className="w-full max-w-md lg:w-1/2">
        {profileData ? (
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 bg-white rounded-lg shadow-lg">
            <div className="overflow-hidden rounded-full w-32 h-32 lg:w-40 lg:h-40">
              <img
                className="h-full w-full object-cover"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt="Profile Picture"
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-5">
                <h2 className="text-2xl font-semibold">
                  {profileData?.firstName} {profileData?.lastName}
                </h2>
                {profileData?.eligibleForListing ? (
                  <Tooltip title="Eligible for listing" color="green">
                    <Verified size={20} color="green" />
                  </Tooltip>
                ) : (
                  <Tooltip title="Not eligible for listing" color="red">
                    <Verified size={20} color="red" />
                  </Tooltip>
                )}
              </div>
              <div className="flex gap-2 justify-center lg:justify-start items-center">
                <h3 className="flex items-center gap-1 text-gray-800 text-sm font-medium">
                  <Mail size={15} /> {profileData?.email}
                </h3>
                {profileData?.emailVerified ? (
                  <Check size={20} color="green" strokeWidth={3} />
                ) : (
                  <span className="text-sm font-medium text-red-500">Unverified</span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col lg:flex-row items-center gap-5 p-5 bg-white rounded-lg shadow-lg">
            <div className="w-full flex flex-col gap-2 items-center lg:items-start justify-center lg:justify-start">
              <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse" />
              <div className="w-24 h-4 rounded bg-gray-300 mt-4 animate-pulse" />
              <div className="w-36 h-4 rounded bg-gray-300 mt-2 animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountDetails;

export interface SignupRequest {
  fullName: {
    firstName: {
      type: String;
    };
    lastName: {
      type: String;
    };
  };
  email: {
    type: String;
    required: [true, "Email can not empty!!!"];
    index: true;
    unique: true;
    sparse: true;
  };
  password: {
    type: String;
    required: [true, "Password can not empty!!!"];
  };
  isConfirmed: {
    type: Boolean;
  };
  resetLink: {
    data: String;
    default: "";
  };
  avatar: {
    type: String;
  };
  cloudinary_id: {
    type: String;
  };
  role: {
    isCandidate: {
      type: Boolean;
    };
    isEmployer: {
      type: Boolean;
    };
    isAdmin: {
      type: Boolean;
    };
  };
  phoneNumber: {
    type: String;
    default: "";
  };
  aboutMe: {
    type: String;
    default: "";
  };
  // jobsHistory: [jobsHistorySchema],
}

export interface UsersLoginRequest {
  email: string;
  password: string;
}

export interface UsersLoginResponse {
  token: string;
  user: User;
}

export interface User {
  email: string;
  isSupervisor: boolean;
  isWorkspaceAdmin: boolean;
  userId: string;
  name: string;
}

export interface GetUserProfileResponse {
  fullName: {
    firstName: string;
    lastName: string;
  };
  aboutMe: string;
  _id: string;
  email: string;
  password: string;
  phoneNumber: string;
  isConfirmed: boolean;
  // package: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Package"
  // },
  resetLink: string;
  avatar: string;
  cloudinary_id: string;
  role: {
    isCandidate: boolean;
    isEmployer: boolean;
    isAdmin: boolean;
  };
}

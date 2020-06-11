import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addUserToCompany } from "../../actions/companyActions";
import { getUser } from "../../actions/userActions";
import { CardContainer } from "../../components/CardContainer";
import { EmptyList } from "../../components/emptyList";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";

const UserPage = ({
  location,
  addUserToCompany,
  getUser,
  user,
  loading,
  myCompany,
}) => {
  const handleAdd = () => {
    addUserToCompany(user._id, myCompany._id);
  };

  useEffect(() => {
    getUser(location.state.user._id);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <CardContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>{user.userName}</h2>
          {user.company !== null ? null : (
            <button onClick={handleAdd} className="btn btn-primary">
              Add to company
            </button>
          )}
        </div>
      </CardContainer>

      <CardContainer>
        <h2>Info</h2>
        <ul>
          <li>Name: {user.userName}</li>
          <li>Email: {user.email}</li>
          <li>Join Date: {user.creationDate}</li>
        </ul>
      </CardContainer>

      <CardContainer>
        {user.company === null ? (
          <>
            <h2>Company</h2>
            <EmptyList />
          </>
        ) : (
          <>
            <h2>
              <Link
                to={{
                  pathname: "/company",
                  state: {
                    company: user.company,
                  },
                }}
              >
                {user.company.companyName}
              </Link>
            </h2>
            <ul>
              <li>Type: {user.type}</li>
              <li>Size: {user.size}</li>
              <li>Industry: {user.Industry}</li>
              <li>Join Date: {user.creationDate}</li>
            </ul>
          </>
        )}
      </CardContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  loading: state.userReducer.loading,
  myCompany: state.companyReducer.myCompany,
});

export default connect(mapStateToProps, { addUserToCompany, getUser })(
  UserPage
);

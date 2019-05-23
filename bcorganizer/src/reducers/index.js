import { POST_START, POST_SUCCESS, POST_FAIL } from "../actions";
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions";
import {
  FETCH_USERDATA_START,
  FETCH_USERDATA_SUCCESS,
  FETCH_USERDATA_FAIL
} from "../actions";
import {
  GET_COLLECTION_START,
  GET_COLLECTION_SUCCESS,
  GET_COLLECTION_FAIL
} from "../actions";
import {
  POST_QRCODE_START,
  POST_QRCODE_SUCCESS,
  POST_QRCODE_FAIL
} from "../actions";

const initialState = {
  user: [],
  isLoading: false,
  error: "",
  isLoggedIn: false,
  cards: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          qr_code: action.payload.data.qrCode
        },
        isLoading: false,
        error: "",
        isLoggedIn: true
      };
    case POST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggedIn: false
      };

    /************ Reducers for Register *****************/
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        isLoggedIn: true,
        user: [...state.user, ...action.payload]
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload
      };

    /************ Reducers for Fetch *****************/
    case FETCH_USERDATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_USERDATA_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          first_name: action.payload.firstName,
          last_name: action.payload.lastName,
          id: action.payload.id,
          email: action.payload.email,
          organization: action.payload.organization,
          phone: action.payload.phone,
          jobTitle: action.payload.jobTitle,
          qrCode: action.payload.qrCode,
          username: action.payload.username
        },
        isLoggedIn: true
      };
    case FETCH_USERDATA_FAIL:
      return {
        ...state,
        error: action.payload
      };

    /************ Reducers for Collection *****************/
    case GET_COLLECTION_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_COLLECTION_SUCCESS:
      return {
        ...state,
        cards: [
          ...state.cards,
          ...action.payload
        ],
      };
    case GET_COLLECTION_FAIL:
      return {
        ...state,
        error: action.payload
      };
    /************ Reducers for QRcodes *****************/
    case POST_QRCODE_START:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case POST_QRCODE_SUCCESS:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        isLoading: false
      }
    case POST_QRCODE_FAIL:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;

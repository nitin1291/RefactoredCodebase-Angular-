export const vatLabels = {
    langz: {
      eng: {
        dir: "ltr",
        vatEligiblePerson: {
          title: "VAT Eligible Persons",
          header: {
            h1: "Organization Information",
            h2: "Complete Information",
            h3: "Password",
          },
          c1: {
            title: "Organization Information",
            in1: "Company ID",
            in2: "Entity Name"
          },
          c2: {
            title: "Contact Information",
            in1: "Mobile Number",
            in2: "Email",
            in3: "Confirm Email"
          },
          c3: {
            title: "VAT Eligible Person Details",
            in1: "Legal Person Category",
            in2: "Preferred Refund Frequency",
            in3: "Expected Purchase on non-economic activities",
            in4: "IBAN",
            confirmation: "I confirm that my identification details (e.g. national ID or Iqama number) available on this form match my bank details available on record for this IBAN."
          },
          c4: {
            title: "Contact Person",
            in1: "Tin",
            in2: "ID Type",
            in3: "ID Number",
            in4: "Date of Birth",
            in5: "First Name",
            in6: "Last Name",
            in7: "Job Title",
            in8: "Mobile Number",
            in9: "Email",
            in10: "Confirm Email",
          },
          c5: {
            title: "Home Address",
            in1: "Country",
            in2: "Province",
            in3: "City",
            in4: "District",
            in5: "Street Name",
            in6: "Building Number",
            in7: "Zip Code",
            in8: "Additional Number",
            in9: "Unit Number",
            selectAddress:"Please select any one National address"
          },
          c6: {
            title: "Entity Address",
          },
          err: {
            in1: "is Required",
            in2: "Please Select",
            in3: "Please Enter",
            companyidlength: "Company ID should be of 10 digit",
            companyidexists: "This ID is already registered, please login using your credentials",
            companyidstartwitherr: "Company ID should start with 7",
            containsSpecialChars: "Special characters are not allowed in",
            enterMobileNumber: "Please Enter Mobile Number",
            startsWithZero: "Mobile Number should not start with 0",
            enterEmail: "Please enter Email ID",
            emailinvalid: "Enter correct Email Id",
            emailsNotMatch: "Email and Confirm Email should be same",
            tinNumberMinlength: "Tin Number should be atleast 10 characters long",
            tinNumberStartWith: "Tin Number should start with 3",
            selectIDType: "Select ID: National/IQAMA/GCC from the drop down",
            enterIDNumber: "Enter ID Number",
            enterPassportNumber: "Please enter passport number",
            nationalIDMinLength: "National ID should be 10 digits",
            iqamaIDMinLength: "Iqama ID should be 10 digits",
            gccIDMinlength: "GCC ID should be between 7-15 digits",
            nationalIDStartWith: "ID number should start with 1",
            iqamaIDStartWith: "Iqama ID should start with 2",
            enterDateOfBirth: "Enter Date of Birth",
            dobFutureDate: "Entered Date cannot be future date",
            enterFirstName: "Enter First Name",
            enterLastName: "Enter Last Name",
            enterJobTitle: "Enter Job Title",
            bcpMobileNumberMaxLength: "Mobile Number should be 14 digits",
            bcpMobileNumberStartWith: "Mobile Number should be start with 009665",
            enterConfirmEmail: "Enter Email ID",          
            countryrqrd: "Select Country",
            provincerqrd: "Select Province",
            cityrqrd: "Select City",
            quarterrqrd: "Enter Quarter",
            enterDistrict:"Enter District",
            streetrqrd: "Enter Street",
            bnorqrd: "Enter Building number",
            ziprqrd: "Enter Postal Code",
            unorqrd: "Enter Unit Number",
            enterAdditionalNumber: "Enter Additional number",
            containsOnlyNumbers: "Only numbers not allowed for Company name",
          },
          acknowledgement: {
            title: "Acknowledgement",
            message: "GAZT acknowledges the receipt of your registration application",
            info: {
              name: "Name",
              appno: "Application Number",
              date: "Date",
              login_link_label: "Go To Login"
            }
          },   
          back: "Back",
          continue: "Continue",
        },
      },
      arb: {
        dir: "rtl",
        vatEligiblePerson: {
          title: "الأشخاص المؤهلين لإسترداد ضريبة القيمة المضافة",
          header: {
            h1: "بيانات الكيان",
            h2: "إكمال البيانات",
            h3: "كلمة المرور",
          },
          c1: {
            title: "بيانات الكيان",
            in1: "رقم الشركة",
            in2: "Entity Name"
          },
          c2: {
            title: "معلومات الإتصال",
            in1: "رقم الجوال",
            in2: "البريد الإلكتروني",
            in3: "تأكيد البريد الإلكتروني"
          },
          c3: {
            title: "تفاصيل الأشخاص المؤهلون لإسترداد ضريبة القيمة المضافة",
            in1: "فئة الشخص الاعتبارية",
            in2: "الفترة المفضلة للإسترداد",
            in3: "الشراء المتوقع في الأنشطة غير الاقتصادية",
            in4: "آيبان",
            confirmation: "أؤكد أن تفاصيل هويتي (مثل الهوية الوطنية أو رقم الإقامة) المدخله في هذا النموذج تتطابق مع التفاصيل المصرفية الخاصة بي والمتاحة في السجل لهذا الآيبان",
          },
          c4: {
            title: "ة الاتصال",
            in1: "الرقم المميز",
            in2: "نوع الهوية",
            in3: "رقم الهوية",
            in4: "تاريخ الولادة",
            in5: "الاسم الاول",
            in6: "اسم العائلة",
            in7: "المسمى الوظيفي",
            in8: "رقم الهاتف المحمول",
            in9: "عنوان الايميل",
            in10: "تأكيد البريد الالكتروني",
          },
          c5: {
            title: "تفاصيل العنوان",
            in1: "الدولة",
            in2: "المنطقة",
            in3: "المدينة",
            in4: "الحي",
            in5: "اسم الشارع",
            in6: "رقم المبنى",
            in7: "الرمز البريدي ",
            in8: "الرقم الإضافي",
            in9: "رقم الوحده",
            selectAddress:"الرجاء اختيار العنوان الوطني"
          },
          err: {
            in1: "مطلوب",
            companyidlength: "رقم الشركة خاطئ،يجب أن يتكون من 10 أرقام",
            companyidexists: "رقم الهوية المدخل مسجل مسبقاً، الرجاء تسجيل الدخول الى حسابكم", //needs to verify
            companyidstartwitherr: "رقم الشركة يجب أن يبدأ برقم 7",
            containsSpecialChars: "اسم الشركة يجب أن لايحتوي على رموز",
            enterMobileNumber: "الرجاء ادخال رقم الجوال",
            startsWithZero: "رقم الهاتف المحمول يجب أن لا يبدأ بصفر",
            enterEmail: "الرجاء إدخال البريد الإلكتروني",
            emailinvalid: "ادخل بريد الكتروني صحيح",
            emailsNotMatch: "البريد الإلكتروني المدخل غير مطابق, الرجاء ادخال بريد صحيح",
            tinNumberMinlength: "الرقم المميز يجب ان يحتوي على 10 ارقام",
            tinNumberStartWith: "الرقم المميز يجب ان يبدأ برقم 3",
            selectIDType: "Select ID Type",
            enterIDNumber: "ادخل رقم الهوية",
            enterPassportNumber: "الرجاء إدخال رقم الجواز",
            nationalIDMinLength: "رقم الهوية الوطنية يجب ان يتكون من 10 أرقام",
            iqamaIDMinLength: "رقم الإقامة يجب أن يتكون من 10 أرقام",
            gccIDMinlength: "رقم مواطني دول الخليج يجب ان يتكون من 7 الى 15 رقم",
            nationalIDStartWith: "رقم الهوية الوطنية يجب أن يبدأ برقم 1",
            iqamaIDStartWith:  "رقم الهوية يجب ان يبدأ بـ 2",
            enterDateOfBirth: "الرجاء إدخال تاريخ الميلاد",
            dobFutureDate: "التاريخ المدخل يجب ان يكون قبل من تاريخ اليوم",
            enterFirstName: "الرجاء إدخال الاسم الأول",
            enterLastName: "الرجاء إدخال اسم العائلة",
            enterJobTitle: "",
            bcpMobileNumberMaxLength: "رقم الجوال خاطئ يجب أن يتكون من 14 رقم",
            bcpMobileNumberStartWith: "يجب ان يبدأ رقم الهاتف الجوال بـ 009665",
            enterConfirmEmail: "الرجاء ادخال البريد الإلكتروني",
            countryrqrd: "اختر الدولة",
            provincerqrd: "اختر المنطقة",
            cityrqrd: "اختر المدينة",
            quarterrqrd: "ادخل الحي",
            enterDistrict:"ادخل الحي",
            streetrqrd: "ادخل اسم الشارع",
            bnorqrd: "ادخل رقم المبنى",
            ziprqrd: "ادخل الرمز البريدي",
            unorqrd: "الرجاء إدخال رقم الوحدة",
            enterAdditionalNumber: "ادخل الرقم الإضافي",
            containsOnlyNumbers: "اسم الشركة يجب أن يحتوي على أحرف فقط", //need to change
          },
          acknowledgement: {
            title: "إشعار إستلام",
            message: "تقر الهيئة العامة للزكاة والدخل باستلام طلب التسجيل الخاص بك",
            info: {
              name: "الاسم",
              appno: "رقم الطلب",
              date: "التاريخ",
              login_link_label: "الذهاب لصفحة الدخول"
            }
          },
          back: "رجوع",
          continue: "متابعة",
        },
      },
    },
  };
import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import SafeAreaWrapper from '../constants/SafeAreaWrapper';
import DoctorsList from '../components/DoctorsList';
import CustomBottomTab from '../components/CustomBottomTab';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {width} from '../constants/DimensionFontSizes';
import HeaderTitle from '../components/HeaderTitle';
import {
  headingCommonStyle,
  headings,
  sectionSeprator,
} from '../constants/commonStyles';
import {primaryDarkColor} from '../constants/Colors';
import {
  AllDoctorsData,
  CardiologyDoctors,
  DentistryDoctors,
  GastroenterologistDoctors,
  GeneralDoctors,
  LaboratoryDoctors,
  NeurologyDoctors,
  PulmonologyDoctors,
  VaccinationDoctors,
} from '../constants/data';

const AllDoctors = ({navigation, route}) => {
  const allDoctors = 'All Doctors';
  [pageTitle, setPageTitle] = useState(allDoctors);
  React.useEffect(() => {
    if (route.params?.pageTitle) {
      setPageTitle(route.params.pageTitle);
    }
    console.log('first');
  }, [route.params?.pageTitle]);
  return (
    <SafeAreaWrapper backgroundColor={'white'}>
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.containe}>
            <HeaderTitle title={pageTitle} navigation={navigation} />
            <Text style={[headings.h1, headingCommonStyle, sectionSeprator]}>
              Top Rated {pageTitle != allDoctors}
              <Text
                style={{
                  fontSize: scale(12.5),
                  backgroundColor: primaryDarkColor,
                  color: 'white',
                  paddingVertical: '1%',
                  verticalAlign: 'middle',
                  paddingHorizontal: scale(15),
                  borderRadius: scale(10),
                }}>
                {' '}
                {pageTitle}{' '}
              </Text>{' '}
              Doctors
            </Text>
            <View style={{marginTop: 0, alignItems: 'center'}}>
              <DoctorsList
                doctorsData={
                  pageTitle == allDoctors
                    ? AllDoctorsData
                    : pageTitle == 'Dentistry'
                    ? DentistryDoctors
                    : pageTitle == 'Cardiology'
                    ? CardiologyDoctors
                    : pageTitle == 'Pulmonology'
                    ? PulmonologyDoctors
                    : pageTitle == 'General'
                    ? GeneralDoctors
                    : pageTitle == 'Neurology'
                    ? NeurologyDoctors
                    : pageTitle == 'Gastroenterologist'
                    ? GastroenterologistDoctors
                    : pageTitle == 'Laboratory'
                    ? LaboratoryDoctors
                    : pageTitle == 'Vaccination'
                    ? VaccinationDoctors
                    : null
                }
                navigation={navigation}
                type="horizontal"
              />
              <View style={{flexDirection: 'row', width: '100%'}}></View>
            </View>
          </View>
        </ScrollView>
        <CustomBottomTab activeTab={'doctors'} navigation={navigation} />
      </View>
    </SafeAreaWrapper>
  );
};

export default AllDoctors;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    width: '96%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  section: {
    marginTop: '20@s',
  },
  banner: {
    width: width - 0.7,
    height: '150@s',
    resizeMode: 'contain',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: '17@s',
    fontWeight: '700',
    marginLeft: 15,
  },
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  docItem: {
    width: '45%',

    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'green',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: '600',
    alignSelf: 'center',
  },
});

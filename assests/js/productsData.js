// Sample product data array
const products = [
  {
    id: "1ba",
    code: "DPRG-1GH",
    name: "DECIMAL DISPLAY",
    title: "Precision Helium Leak Detectors",
    description:
      "The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a S-PR-GH sensor tube. It displays vacuum measurements based on the thermal conductivity of gases. The Model DPRG-1GH unit covers the range from 0.001 mbar to 20 mbar.",
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Brass body measuring cell with glass metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC, frequency 47 ~ 440Hz",
    ],
    images: [
      "./assests/img/products/dprg1gh/DPRG1GH-FRONTPANELMINIDECIMAL.jpg",
      "./assests/img/products/dprg1gh/dprg1ghdecimalFULLSET.jpg",
      "./assests/img/products/dprg1gh/DPRG-1GH_back_panel.jpg",
      "./assests/img/products/dprg1gh/S-PR-GH_SENSOR.jpg",
    ],
    pdf: "./assests/download/VACUUM_GAUGES _CATALOGS_DOWNLOAD_FOLDER/DPRG/DPRG-1GH exponential catalog.pdf",
    specifications: [
      { name: "Number of sensor channels", value: "ONE" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    end: "Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. The calibration certificates are available only on request at additional cost. Please contact before ordering.",
  },
  {
    id: "1bb",
    code: "DPRG-2GH",
    name: "DECIMAL DISPLAY",
    title: "Precision Helium Leak Detectors",
    description:
      "The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a S-PR-GH sensor tube. It displays vacuum measurements based on the thermal conductivity of gases. The Model DPRG-2GH unit covers the range from 0.001 mbar to 20 mbar, and measures two channels simultaneously with channel selection via a switch on the front bezel.",
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC, frequency 47 ~ 440Hz",
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GHdecimaldisplayfullset.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/S-PR-GH_SENSOR.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GHrearpanel.jpg",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      {
        name: "Channel Selection",
        value: "Through selection switch provided on the front panel",
      },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      { name: "VAC. Display", value: "Four-digit bright red LED, 14 mm high" },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    end: "Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. The calibration certificates are available only on request at additional cost. Please contact before ordering.",
  },
  {
    id: "1bc",
    code: "DPRG-1GH-SP",
    name: "DPRG Single Line Display",
    title: "Digital Pirani Vacuum Gauge",
    description: `
        The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a
S-PR-GH sensor tube. It displays vacuum measurements based on thermal conductivity of gases. The Model
DPRG-1GH-SP unit covers the range from 0.001 m.Bar to 20 m.bar, and controls relay with independent set
point
        `,
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console ",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation ",
      "brass body measuring cell with metal-sealed feed through ",
      "with universal power supply – input voltage from 90 ~ 264VAC, ",
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-1GH-SP-EXPONENTIALBACKPANEL",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfmVt8gVvshz-3ne4f87Sq63BLfEQynWqfNQH98_Ea95oqtx7",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIZaYaDf_0SeV5q4MuTuSO3a997Qz7XpCUTGkOwJnWx6wnXPB9",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar." },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar." },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      {
        name: "Channel selection",
        value: "Through selection switch provided on the front panel",
      },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "VAC and ATM Adjust",
        value: "adjusted by trim pot at the signal conditioner PCB",
      },
      {
        name: "Operating Voltage",
        value:
          "universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)”" },
      {
        name: "Environmental Considerations",
        value: "not for use with explosive or corrosive gases",
      },
      { name: "Overall dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional outputs on request",
        value: "RS485, 0 -10V Dc analog output",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/
thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of
the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required.
The calibration certificates are available only on request at additional cost. Pl contact before ordering. 
 `,
  },
  {
    id: "1bd",
    code: "DPRG-1GH-2SP",
    name: "DPRG Single Line Display with Dual Setpoints",
    title: "Precision Helium Leak Detectors",
    description:
      "The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a S-PR-GH sensor tube. It displays vacuum measurements based on the thermal conductivity of gases. The Model DPRG-1GH-2SP unit covers the range from 0.001 m.Bar to 20 m.Bar, and controls relay with independent dual set points for HI & LO values.",
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC, frequency 47 ~ 440Hz",
      "Dual setpoints for HI & LO values, with relay outputs",
    ],
    images: [
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqGQ4RWrnDpzqV0NbIwlDSMfxB_P4okEa8mzH0VOcUdCC7MFQR",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfmVt8gVvshz-3ne4f87Sq63BLfEQynWqfNQH98_Ea95oqtx7",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIZaYaDf_0SeV5q4MuTuSO3a997Qz7XpCUTGkOwJnWx6wnXPB9",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "ONE" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      { name: "VAC. Display", value: "Four-digit bright red LED, 14 mm high" },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      { name: "Process Control Set Points", value: "One" },
      {
        name: "Process Control Relays",
        value:
          "Two relay outputs, potential free contacts; independent, available through the DB15 accessory connector on the rear panel",
      },
      { name: "Nonvolatile Memory", value: "Only for set points" },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    end: "Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. The calibration certificates are available only on request at additional cost. Please contact before ordering.",
  },
  {
    id: "4ba",
    code: "DPRG-2GH-SP",
    name: "DPRG Dual Line Display with Setpoints",
    title: "Precision Helium Leak Detectors",
    description:
      "The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a S-PR-GH sensor tube. It displays vacuum measurements based on thermal conductivity of gases. The Model DPRG-2GH-SP unit covers the range from 0.001 mBar to 20 mBar, and controls relay with independent set points. It is a dual channel gauge with channel selection via the front bezel membrane switch.",
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC, frequency 47 ~ 440Hz",
      "Dual channel with channel selection via front bezel switch",
      "Two independent relay setpoints for process control",
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GH-SP-backpanelfullset.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/S-PR-GH_SENSOR.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GH-SPDECIMALFRONTPANEL.jpg",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      { name: "VAC. Display", value: "Four-digit bright red LED, 14 mm high" },
      {
        name: "Channel Selection",
        value: "Through front panel selection switch",
      },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      { name: "Process Control Set Points", value: "Two" },
      {
        name: "Process Control Relays",
        value:
          "Two relays, potential free contacts; independent, available through the DB15 accessory connector on the rear panel",
      },
      { name: "Nonvolatile Memory", value: "Only for set points" },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    end: "Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. The calibration certificates are available only on request at additional cost. Please contact before ordering.",
  },
  {
    id: "DPRG-1GH",
    code: "DPRG-1GH",
    name: "Digital Pirani Vacuum Gauge",
    title: "Digital Pirani Vacuum Gauge – DPRG-1GH",
    description:
      "The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a S-PR-GH sensor tube. It displays vacuum measurements based on thermal conductivity of gases. The Model DPRG-1GH unit covers the range from 0.001 mbar to 20 mbar.",
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC, frequency 47 ~ 440Hz",
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-1GH-exponentialdisplay.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-1GH_back_panel.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/S-PR-GH_SENSOR.jpg",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "ONE" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    end: "Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. The calibration certificates are available only on request at additional cost. Please contact before ordering.",
  },
  {
    id: "DPRG-1GH-SP",
    code: "DPRG-1GH-SP",
    name: "Digital Pirani Vacuum Gauge",
    title: "Digital Pirani Vacuum Gauge – DPRG-1GH-SP",
    description:
      "The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a S-PR-GH sensor tube. It displays vacuum measurements based on thermal conductivity of gases. The Model DPRG-1GH-SP unit covers the range from 0.001 m.Bar to 20 m.bar, and controls relay with independent set point.",
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC",
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-1GH-exponentialdisplay.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-1GH-SP-EXPONENTIALBACKPANEL.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-1GH-SP-exponentialfullset.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/S-PR-GH_SENSOR.jpg",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "ONE" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      {
        name: "Process control set points",
        value: "One",
      },
      {
        name: "Process Control Relays",
        value:
          "One relay output, potential free contacts; independent available through the DB15 accessory connector on the rear panel",
      },
      {
        name: "Nonvolatile Memory",
        value: "Only for set points",
      },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    end: "Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. The calibration certificates are available only on request at additional cost. Please contact before ordering.",
  },
  {
    id: "DPRG-2GH-SP",
    code: "DPRG-2GH-SP",
    name: "Digital Pirani Vacuum Gauge",
    title: "Digital Pirani Vacuum Gauge – DPRG-2GH-SP",
    description:
      "The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a S-PR-GH sensor tube. It displays vacuum measurements based on thermal conductivity of gases. The Model DPRG-2GH-SP unit covers the range from 0.001 mbar to 20 mbar, and controls relay with independent set point.",
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC",
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GH-SP BACKPANEL.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GH-SP-FULLSETEXPONENTIAL.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GH-SP-backpanelfullset.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/S-PR-GH_SENSOR.jpg",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "Channel selection",
        value: "Through front panel selection switch",
      },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      {
        name: "Process control set points",
        value: "Two",
      },
      {
        name: "Process Control Relays",
        value:
          "Two relays, potential free contacts; independent available through the DB15 accessory connector on the rear panel",
      },
      {
        name: "Nonvolatile Memory",
        value: "Only for set points",
      },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    calibration:
      "Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. The calibration certificates are available only on request at additional cost. Please contact before ordering.",
  },
  {
    id: "DPRG-2GH",
    code: "DPRG-2GH",
    name: "Digital Pirani Vacuum Gauge",
    title: "Digital Pirani Vacuum Gauge DPRG-2GH",
    description:
      "The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a S-PR-GH sensor tube. It displays vacuum measurements based on thermal conductivity of gases. The Model DPRG-2GH unit covers the range from 0.001 mbar to 20 mbar, and controls relay with independent set point.",
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC, frequency 47 ~ 440Hz",
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GHrearpanel.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/DPRG-2GHexpentialdisplayfullset.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/S-PR-GH_SENSOR.jpg",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      {
        name: "Channel selection",
        value: "Through selection switch provided on the front panel",
      },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    calibration:
      "Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. The calibration certificates are available only on request at additional cost. Please contact before ordering.",
  },
  {
    id: "FGD-1GH",
    code: "FGD-1GH",
    name: "Pirani Vacuum Gauge",
    title: "FLEXA Digital Pirani Vacuum Gauge",
    description: `The UVS Model FLEXA series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a
FG-04 sensor tube. The Model FGD-1GH displays vacuum measurements based on thermal conductivity from
0.001 m.Bar to 20 m.bar.
The Advantage Of This Vacuum Gauge FLEXA Series Is The Sensor Tube Has The Built In Zero And Atm
Adjustments, So That The Sensor Tube Can Be Used As A Transducer, And Each Sensor Is Factory Calibrated
At Sensor Level.`,
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "brass body measuring cell with metal-sealed feed through",
      "interchangeability of the sensor possible without disturbing the display unit.",
    ],
    images: [
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/20210720_182616-scaled-e1657711862226.jpg",
    ],
    specifications: [
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "VAC and ATM Adjust",
        value: "Adjusted by trim pot at the signal conditioner PCB",
      },
      { name: "Process Control Set Points", value: "NIL" },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
      {
        name: "Sensor Cable",
        value:
          "Standard RJ45 male plugs on both ends, 2 meters long. Optional additional lengths available on request.",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/ thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required. 
The calibration certificates are available only on request at additional cost. Pl contact before ordering
`,
  },
  {
    id: "FGD-2GH",
    code: "FGD-2GH",
    name: "FLEXA Digital Pirani Vacuum Gauge",
    title: "FLEXA Digital Pirani Vacuum Gauge FGD-2GH",
    description: `The UVS Model FLEXA series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a FG-04 sensor tube. The Model FGD-2GH unit covers the range from 0.001 m.Bar to 20 m.bar, and measures two channels.
  
The advantage of this Vacuum Gauge FLEXA Series is the sensor tube has the built-in zero and ATM adjustments, so that the sensor tube can be used as a transducer, and each sensor is factory calibrated at the sensor level.
With this, a 1:1 replacement of the sensor with the display unit is established, and there is no dependency on vacuum gauge level adjustment in case of sensor replacement.`,
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Two channel measurement",
      "Space-saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feedthrough",
      "Interchangeability of the sensor possible without disturbing the display unit.",
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    specifications: [
      { name: "Number of Sensor Channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "4-digit bright red LED, 14 mm high",
      },
      {
        name: "VAC and ATM Adjust",
        value:
          "Adjusted by trim pot at the signal conditioner PCB of the sensor",
      },
      { name: "Process Control Set Points", value: "NIL" },
      { name: "Process Control Relays", value: "NIL" },
      { name: "Nonvolatile Memory", value: "NIL" },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output (OPTIONAL)",
      },
      {
        name: "Sensor Cable",
        value:
          "Standard RJ45 male plugs on both ends, 2 meters long. Optional additional lengths available on request.",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/thermocouple/full range gauges to maintain all of their vacuum gauges in certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated/repaired if required.
The calibration certificates are available only on request at additional cost. Please contact before ordering.`,
    images: [
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/IMG_6307.jpg",
    ],
  },
  {
    id: "FGD-2GH-SP",
    code: "FGD-2GH-SP",
    name: "FLEXA Digital Pirani Vacuum Gauge",
    title: "FLEXA Digital Pirani Vacuum Gauge FGD-2GH-SP",
    description: `The UVS Model FLEXA series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a FG-04 sensor tube. The Model FGD-2GH-SP displays vacuum measurements from 0.001mBar to 20 mBar and has a built-in potential free contact set point relay output, one for each channel.

The advantage of this Vacuum Gauge FLEXA Series is the sensor tube has built-in zero and ATM adjustments, so that the sensor tube can be used as a transducer, and each sensor is factory calibrated at the sensor level.

With this, a 1:1 replacement of the sensor with the display unit is established, and there is no dependency on vacuum gauge level adjustment in case of sensor replacement.`,
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Two channel measurement with independent relay outputs",
      "Space-saving rugged design- 1/8 DIN console",
      "Brass body measuring cell with metal-sealed feedthrough",
      "Universal power supply",
      "Interchangeability of the sensor possible without disturbing the display unit",
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    specifications: [
      { name: "Number of Sensor Channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Measuring Unit", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "4-digit bright red LED, 14 mm high",
      },
      {
        name: "VAC and ATM Adjust",
        value:
          "Adjusted by trim pot at the signal conditioner PCB of the sensor",
      },
      { name: "Process Control Set Points", value: "One for each channel" },
      {
        name: "Process Control Relays",
        value:
          "Two relay outputs, potential free contacts; independently available through the DB15 accessory connector on the rear panel",
      },
      { name: "Nonvolatile Memory", value: "Only for set points" },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output (optional)",
      },
      {
        name: "Sensor Cable",
        value:
          "Standard RJ45 male plugs on both ends, 2 meters long. Optional additional lengths available on request.",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/thermocouple/full range gauges to maintain all of their vacuum gauges in certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated/repaired if required.
The calibration certificates are available only on request at additional cost. Please contact before ordering.`,
    images: [
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/FGD-2GH-SP-COMPLETE-SET-scaled.jpg",
    ],
  },
  {
    id: "FGD-1GH-2SP",
    code: "FGD-1GH-2SP",
    name: "FLEXA Digital Pirani Vacuum Gauge",
    title: "FLEXA Digital Pirani Vacuum Gauge FGD-1GH-2SP",
    description: `The UVS Model FLEXA series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from an FG-04 sensor tube. The Model FGD-1GH-2SP displays vacuum measurements from 2000 to 0.1 Pascals and has two built-in potential-free contact set point relay outputs.

The advantage of this Vacuum Gauge FLEXA Series is that the sensor tube has built-in zero and ATM adjustments, so the sensor tube can be used as a transducer, and each sensor is factory calibrated at the sensor level.

With this, a 1:1 replacement of the sensor with the display unit is established, and there is no dependency on vacuum gauge level adjustment in case of sensor replacement.`,
    features: [
      "Measurement range 2000 to 0.1 Pascal",
      "Space-saving rugged design - 1/8 DIN console",
      "Brass body measuring cell with metal-sealed feedthrough",
      "Universal power supply",
      "Interchangeability of the sensor possible without disturbing the display unit",
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    specifications: [
      { name: "Number of Sensor Channels", value: "ONE" },
      { name: "Measuring Range", value: "2000 to 0.1 Pascal" },
      { name: "Measuring Unit", value: "Pascal" },
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "4-digit bright red LED, 14 mm high",
      },
      {
        name: "VAC and ATM Adjust",
        value:
          "Adjusted by trim pot at the signal conditioner PCB of the sensor",
      },
      { name: "Process Control Set Points", value: "Two" },
      {
        name: "Process Control Relays",
        value:
          "Two relay outputs, potential-free contacts; independently available through the DB15 accessory connector on the rear panel",
      },
      { name: "Nonvolatile Memory", value: "Only for set points" },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output (optional)",
      },
      {
        name: "Sensor Cable",
        value:
          "Standard RJ45 male plugs on both ends, 2 meters long. Optional additional lengths available on request.",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/thermocouple/full range gauges to maintain all of their vacuum gauges in certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated/repaired if required.
The calibration certificates are available only on request at additional cost. Please contact before ordering.`,
    images: [
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/IMG_6299-rotated.jpg",
    ],
  },
  {
    id: "FGE-1GH",
    code: "FGE-1GH",
    name: "FLEXA Digital Pirani Vacuum Gauge",
    title: "EXPONENTIAL DISPLAY FGE-1GH",
    description: `The UVS Model FLEXA series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from an FG-04 sensor tube. The Model FGE-1GH displays vacuum measurements based on thermal conductivity from 0.001 m.Bar to 20 m.bar. 

Exponential order display from 2.0X10¹ to 1.0X10⁻³ mbar.

The advantage of this Vacuum Gauge FLEXA Series is that the sensor tube has built-in zero and ATM adjustments, so the sensor tube can be used as a transducer, and each sensor is factory calibrated at the sensor level.

With this, a 1:1 replacement of the sensor with the display unit is established, and there is no dependency on vacuum gauge level adjustment in case of sensor replacement.`,
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space-saving rugged design - 1/8 DIN console",
      "Brass body measuring cell with metal-sealed feedthrough",
      "Interchangeability of the sensor possible without disturbing the display unit",
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    specifications: [
      { name: "Number of Sensor Channels", value: "ONE" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Measuring Unit", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "4-digit bright red LED, 14 mm high",
      },
      {
        name: "VAC and ATM Adjust",
        value:
          "Adjusted by trim pot at the signal conditioner PCB of the sensor",
      },
      { name: "Process Control Set Points", value: "NIL" },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output (optional)",
      },
      {
        name: "Sensor Cable",
        value:
          "Standard RJ45 male plugs on both ends, 2 meters long. Optional additional lengths available on request.",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/thermocouple/full range gauges to maintain all of their vacuum gauges in certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated/repaired if required.
The calibration certificates are available only on request at additional cost. Please contact before ordering.`,
    images: [
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/20210721_125447-scaled.jpg",
    ],
  },
  {
    id: "FGE-1GH-SP",
    code: "FGE-1GH-SP",
    name: "FLEXA Digital Pirani Vacuum Gauge",
    title: "EXPONENTIAL DISPLAY FGE-1GH-SP",
    description: `The UVS Model FLEXA series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from an FG-04 sensor tube. The Model FGE-1GH-SP displays vacuum measurements and has a built-in potential free contact set point relay output.

Exponential order display from 2.0X10¹ to 1.0X10⁻³ mbar.

The advantage of this Vacuum Gauge FLEXA Series is that the sensor tube has built-in zero and ATM adjustments, so the sensor tube can be used as a transducer, and each sensor is factory calibrated at the sensor level.

With this, a 1:1 replacement of the sensor with the display unit is established, and there is no dependency on vacuum gauge level adjustment in case of sensor replacement.`,
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Space-saving rugged design - 1/8 DIN console",
      "Brass body measuring cell with metal-sealed feedthrough",
      "Interchangeability of the sensor possible without disturbing the display unit",
      "Potential free relay output for process control",
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    specifications: [
      { name: "Number of Sensor Channels", value: "ONE" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar" },
      { name: "Measuring Unit", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "4-digit bright red LED, 14 mm high",
      },
      {
        name: "VAC and ATM Adjust",
        value:
          "Adjusted by trim pot at the signal conditioner PCB of the sensor",
      },
      { name: "Process Control Set Points", value: "One" },
      {
        name: "Process Control Relays",
        value:
          "One relay output, potential free contacts, available through DB15 accessory connector",
      },
      { name: "Nonvolatile Memory", value: "Only for set points" },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output (optional)",
      },
      {
        name: "Sensor Cable",
        value:
          "Standard RJ45 male plugs on both ends, 2 meters long. Optional additional lengths available on request.",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/thermocouple/full range gauges to maintain all of their vacuum gauges in certified and peak condition, regardless of the original manufacturer. All makes of vacuum gauges can also be calibrated/repaired if required.

The calibration certificates are available only on request at additional cost. Please contact before ordering.`,
    images: [
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/IMG_0670-scaled.jpg",
    ],
  },
  {
    id: "FG-05A",
    code: "FG-05A",
    name: "LINEAR OUTPUT SENSOR",
    title: "LINEAR OUTPUT SENSOR FG-05A",
    description: `The UVS Model FG-05A series Vacuum Pirani Gauge measures vacuum pressure in the range from 0.001 mBar to 20 mBar. 

The advantage of this vacuum gauge FLEXA series is that the sensor tube has built-in zero and ATM adjustments, allowing it to function as a transducer. Each sensor is factory-calibrated at the sensor level. 

With this, a 1:1 replacement of the sensor with the display controller unit is established, eliminating the need for vacuum gauge level adjustments when replacing the sensor.`,
    features: [
      "Measurement range 0.001 to 20 mbar",
      "Built-in zero and ATM adjustments for easy transducer functionality",
      "Factory-calibrated at sensor level",
      "1:1 sensor replacement compatibility with display controller units",
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    specifications: [
      { name: "Vacuum Gauge Head", value: "FG-05A Sensor Tube" },
      { name: "Measuring Range", value: "20 mBar to 0.001 mBar" },
      { name: "Temperature Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC and ATM Adjustments",
        value: "Trim pot at the signal conditioner PCB of the sensor",
      },
      { name: "Operating Voltage", value: "24V DC" },
      { name: "Mounting", value: "Vertical" },
      { name: "Linear Output", value: "1 Volt Per Decade" },
      { name: "Sensor Cable Connection", value: "4 Pin Metal Shell Connector" },
      { name: "Output Voltage", value: "0-10V DC" },
      { name: "Accuracy", value: "Typically ±15% at <20 mBar" },
      { name: "Maximum Over-Pressure", value: "2 Bar Absolute" },
      { name: "Power Consumption", value: "1W" },
      { name: "Output Signal", value: "0 to 10 V DC Nominal" },
      {
        name: "Indications",
        value:
          "Green LED: Status Indicator (Normal); Red LED: Status Indicator (Fault/Fail Condition)",
      },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/thermocouple/full range gauges maintain all their vacuum gauges in certified and peak condition, regardless of the original manufacturer. 

The calibration certificates are available only on request at additional cost. Please contact before ordering.`,
    images: [""],
  },
  {
    id: "FGE-2GH-SP",
    code: "FGE-2GH-SP",
    name: "FLEXA Digital Pirani Vacuum Gauge",
    title: "EXPONENTIAL DISPLAY FGE-2GH-SP",
    description: `The FLEXA FGE-2GH-SP is a two-channel digital vacuum gauge with relay set point controller output. 
The device displays vacuum measurements from 0.001mBar to 20mBar using FG-04 sensor tubes. Each sensor features built-in zero and ATM adjustments, enabling it to function as a transducer. Sensors are factory-calibrated for easy 1:1 replacement with the display unit, eliminating dependency on gauge-level adjustments during sensor replacement.`,
    features: [
      "Measurement range: 0.001 to 20 mBar",
      "Two-channel readout with relay set point control for each channel",
      "Built-in zero and ATM adjustments in the sensor",
      "Factory-calibrated sensor for direct replacement",
      "Bright 4-digit red LED display",
      "Universal power supply (90–264VAC, 50/60Hz)",
      "Compact and rugged 1/8 DIN design",
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in the fine and rough vacuum range",
    ],
    specifications: [
      { name: "Number of Sensor Channels", value: "Two" },
      { name: "Display Range", value: "1000 mBar to 0.001 mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001 mBar" },
      { name: "Measuring Unit", value: "mBar" },
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Temperature Range", value: "+2 to +50°C" },
      { name: "Display", value: "4-digit bright red LED, 14mm high" },
      {
        name: "Process Control Set Points",
        value: "Upper and lower level set points for each channel",
      },
      {
        name: "Process Control Relays",
        value: "Two potential-free relay outputs via DB15 accessory connector",
      },
      { name: "Nonvolatile Memory", value: "For set points only" },
      {
        name: "Operating Voltage",
        value: "90–264VAC, 50/60Hz (universal power supply)",
      },
      { name: "Mounting", value: "¼ DIN (92mm x 92mm x 110mm depth)" },
      {
        name: "Environmental Considerations",
        value: "Not suitable for explosive or corrosive gases",
      },
      {
        name: "Optional Outputs",
        value: "RS485, 0–10V DC analog output (on request)",
      },
      {
        name: "Sensor Cable",
        value:
          "Standard RJ45 male plugs on both ends, 2m long (optional additional lengths available)",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement Pirani, thermocouple, or full-range gauges maintain all their vacuum gauges in certified and peak condition, regardless of the original manufacturer. 
Calibration certificates are available upon request for an additional cost.`,
    images: [
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/17274143-e773-46b0-88c7-f8670d498853-1.jpg",
    ],
  },
  {
    id: "FG-04",
    code: "FG-04",
    name: "FLEXA Digital Pirani Vacuum Sensor",
    title: "FLEXA SENSOR FG-04",
    description: `The FLEXA Digital Pirani Vacuum Sensor FG-04 is part of the UVS FLEXA series, designed for precise vacuum pressure measurement. 
This sensor covers the range from 0.001 mBar to 20 mBar and integrates built-in zero and ATM adjustments, allowing it to function as a transducer. Each sensor is factory calibrated for easy 1:1 replacement with the display unit, eliminating the need for vacuum gauge-level adjustments during sensor replacement.`,
    features: [
      "Measurement range: 0.001 to 20 mBar",
      "Built-in zero and ATM adjustments for easy transducer functionality",
      "Factory-calibrated sensor for direct 1:1 replacement",
      "Vertical mounting configuration",
      "Compact design with minimal dependencies on external adjustments",
    ],
    applications: [
      "Controlling high vacuum systems",
      "Fore vacuum pressure monitoring",
      "Safety circuits in vacuum systems",
      "General vacuum measurement & control in fine and rough vacuum ranges",
    ],
    specifications: [
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Measuring Range", value: "20 mBar to 0.001 mBar" },
      { name: "Temperature Range", value: "+2 to +50°C" },
      {
        name: "VAC and ATM Adjustments",
        value: "Trim pot at the signal conditioner PCB of the sensor",
      },
      { name: "Operating Voltage", value: "+15V, -15V DC" },
      { name: "Mounting", value: "Vertical" },
      {
        name: "Environmental Considerations",
        value: "Not suitable for explosive or corrosive gases",
      },
      {
        name: "Sensor Cable",
        value:
          "Standard RJ45 male plugs on both ends, 2m long (optional additional lengths available)",
      },
    ],
    end: `Unique Vacuum Solutions offers recalibration services to maintain vacuum sensors in certified, peak condition. Calibration certificates are available upon request at additional cost.`,
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/flexasensor.jpg",
    ],
  },
  {
    id: "HPRGD-1GH-SP",
    code: "HPRGD-1GH-SP",
    name: "DECIMAL DISPLAY",
    title: "Hybrid Pirani Vacuum Gauge HPRGD-1GH-SP",
    description: `The HPRGD-1GH-SP Hybrid Pirani Vacuum Gauge is specifically designed for accurate measurement in large volume evacuation vacuum systems. It delivers high accuracy at higher pressures, making it suitable for measurements from 1000 mBar down to 0.001 mBar. Its robust brass body measurement sensor is equipped with a standard KF-10 end fitting, ensuring reliable performance in various applications.`,
    features: [
      "Specially designed for large volume evacuation vacuum readouts",
      "High accuracy at higher pressures (1000 mbar to 1 mbar)",
      "Suitable for precise measurements from 1000 mbar to 0.001 mbar",
      "Brass body measurement sensor with standard KF-10 end fitting",
      "Factory-calibrated for zero and full-scale adjustment",
      "Accuracy @ 25°C: From 1000 to 1 mbar (+/- 2.5%)",
      "Accuracy @ 50°C: From 1mbar to 0.001 mbar (+/- 15%)",
    ],
    applications: [
      "Large volume evacuation systems",
      "Precise vacuum measurement in fine and rough vacuum ranges",
      "Process monitoring requiring accurate high-pressure vacuum readouts",
    ],
    specifications: [
      { name: "Model", value: "HPRGD-1GH-SP" },
      { name: "Sensor Channels", value: "One" },
      { name: "Display Range", value: "1000 mBar to 0.001 mBar" },
      { name: "Display Type", value: "Single-line decimal display" },
      {
        name: "Units of Measurement",
        value: "mBar (optional: Torr, Pa on request)",
      },
      { name: "Vacuum Gauge Head", value: "S-HPR-GH" },
      { name: "Temperature Range", value: "+2°C to +50°C" },
      {
        name: "Zero and Full Scale Adjustment",
        value:
          "Factory set for 1000 to 1 mBar; 0.001 to 1 mBar adjustable on sensor",
      },
      {
        name: "Process Control Relay Output",
        value: "One (potential free NC-COM-CO contacts)",
      },
      { name: "Nonvolatile Memory", value: "Only for set points" },
      { name: "Operating Voltage", value: "96 to 264V AC / 50 Hz" },
      { name: "Mounting Dimensions", value: "92 mm x 92 mm cutout" },
      {
        name: "Environmental Conditions",
        value:
          "Not suitable for high moisture levels or corrosive gas evacuation",
      },
      { name: "Overall Dimensions", value: "92W x 92H x 110D mm" },
    ],
    end: `Factory-calibrated for accurate vacuum measurement, with adjustment options for specific ranges. Calibration certificates are available on request.`,
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/IMG_3822.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/IMG_3825.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/IMG_3823.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/hybridpiranibackviewassembly.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/IMG_3820.jpg",
    ],
  },
  {
    id: "HPRGE-1GH-SP",
    code: "HPRGE-1GH-SP",
    name: "EXPONENTIAL DISPLAY",
    title: "Digital Pirani Vacuum Gauge- HPRGE-1GH-SP",
    description: `
The HPRG-1GH-SP Digital Pirani Vacuum Gauge, with the S-EPR-GH sensor, delivers high-precision vacuum measurement from 1000 mBar to 1x10e-4 mBar. Designed for large-volume evacuation systems, it features a brass body sensor with standard NW10 fittings (optional NW16/KF-25), an exponential display, and RS485 Modbus communication. With high accuracy at higher pressures, process control relay output, and universal power input, it is ideal for fine and rough vacuum applications, excluding corrosive or high-moisture environments.`,
    features: [
      "specially designed for large volume evacuation vacuum readouts.",
      "High Accuracy At Higher Pressures from 1000 mbar to 1 mbar",
      "Very useful for accurate measurement of vacuum from 1000 mbar to 1X10e-4 mbar",
      "Brass body measurement sensor with standard KF-10 / KF-16 optional KF-25 end fitting.",
    ],
    applications: [
      "Large volume evacuation systems",
      "Precise vacuum measurement in fine and rough vacuum ranges",
      "Process monitoring requiring accurate high-pressure vacuum readouts",
    ],
    specifications: [
      { name: "Sensor Model", value: "S-EPR-GH" },
      { name: "Sensor Display Range", value: "1000 mbar to 1X10e-4 mbar" },
      {
        name: "Sensor Display Type",
        value: "Exponential format display (x.ye-z)",
      },
      { name: "Sensor Units of Measurement", value: "Mbar" },
      { name: "Sensor Temperature Range", value: "+2 to 50°C" },
      {
        name: "Sensor End Connection",
        value: "Standard NW10 (optional NW16/25 available)",
      },
      { name: "Sensor Output", value: "4 to 20 mA" },
      {
        name: "Sensor Digital Interfacing",
        value: "RS485 (standard RTU Modbus protocol)",
      },
      {
        name: "Sensor Zero & Span Adjustment",
        value: "Through push button (at sensor end)",
      },
      { name: "Sensor Operating Voltage", value: "+15V, 0, -15V DC" },
      { name: "Sensor Mounting Orientation", value: "Vertical only" },
      {
        name: "Sensor Environmental Conditions for Operation",
        value:
          "Not recommended for high moisture levels & corrosive gases evacuation",
      },
      { name: "Display Controller Model", value: "HPRG-1GH-SP" },
      { name: "Number of Sensor Channels", value: "One" },
      { name: "Display Controller Range", value: "1000 mbar to 1X10e-4 mbar" },
      {
        name: "Display Controller Type",
        value: "7-segment exponential order display (x.ye-z)",
      },
      { name: "Display Controller Units of Measurement", value: "Mbar" },
      { name: "Vacuum Gauge Head Compatibility", value: "S-EPR-GH" },
      { name: "Display Controller Temperature Range", value: "+2 to 50°C" },
      { name: "Zero and Full Scale Adjustment", value: "At sensor end" },
      {
        name: "Process Control Relay Set Point Output",
        value: "One (potential-free NC-COM-CO contacts)",
      },
      { name: "Non-volatile Memory", value: "Only for setpoints" },
      {
        name: "Display Controller Input Signal",
        value: "RS485 Modbus output from sensor S-EPR-GH",
      },
      {
        name: "Display Controller Operating Voltage",
        value: "From 96 to 264V AC / 50 Hz",
      },
      {
        name: "Display Controller Overall Dimensions",
        value: "92W x 92H x 110D mm",
      },
      { name: "Display Controller Input Supply Voltage", value: "220V, 50 Hz" },
    ],
    end: `Factory-calibrated for accurate vacuum measurement, with adjustment options for specific ranges. Calibration certificates are available on request.`,
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/hybridpiranibackviewassembly.jpg",
    ],
  },
  {
    id: "HPRGE-2GH",
    code: "HPRGE-2GH",
    name: "EXPONENTIAL DISPLAY",
    description: ``,
    title: "Hybrid Pirani Vacuum Gauge- HPRGE-2GH ",
    end: `The HPRGE-2GH Vacuum Gauge Controller is designed for precise vacuum measurement, offering two independent sensor channels for large volume evacuation applications. It provides high accuracy at higher pressures ranging from 1000 mbar to 1 mbar and is especially effective in measuring vacuum from 1000 mbar to 0.001 mbar. The unit features a brass body measurement sensor with a standard KF-10 end fitting, ensuring durability and reliability. The display shows readings in mantissa and exponential format, with the option to measure in mbar, torr, or Pa upon request. This controller is ideal for advanced vacuum systems requiring accurate and reliable pressure measurements in both the fine and rough vacuum ranges.`,
    features: [
      "Specially designed for large volume evacuation vacuum readouts.",
      "TWO CHANNEL INDEPENDENT VACUUM MEASUREMENT.",
      "High accuracy at higher pressures from 1000 mbar to 1 mbar.",
      "Very useful for accurate measurement of vacuum from 1000 mbar to 0.001 mbar.",
      "Brass body measurement sensor with standard KF-10 end fitting.",
    ],
    specifications: [
      { name: "Model", value: "HPRGE-2GH" },
      { name: "Number of Sensor Channels", value: "TWO" },
      { name: "Display Range", value: "1000 mbar to 0.001 mbar" },
      { name: "Display Type", value: "Mantissa & exponential order display" },
      {
        name: "Units of Measurement",
        value: "Mbar (optional Torr, Pa on request)",
      },
      { name: "Vacuum Gauge Head", value: "S-HPR-GH" },
      { name: "Temperature Range", value: "+2 to 50°C" },
      {
        name: "Zero & Full Scale Adjustment",
        value:
          "Factory set for range between 1000 to 1 mbar; 0.001 to 1 mbar calibration adjustment on sensor.",
      },
      { name: "Process Control Relay Set Point Output", value: "NIL" },
      { name: "Non-Volatile Memory", value: "NIL" },
      { name: "Operating Voltage", value: "From 96 to 264V AC / 50 Hz" },
      { name: "Mounting Dimensions", value: "92 X 92 mm cut-out" },
      {
        name: "Environmental Conditions for Operation",
        value:
          "Not recommended for high moisture levels & corrosive gases evacuation.",
      },
      { name: "Overall Dimensions", value: "92W X 92H X 110D mm" },
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/20201219_130721.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/20201219_130924.jpg",
    ],
  },
  {
    id: "FGE-2GH",
    code: "FGE-2GH",
    name: "FLEXA Digital Pirani Vacuum Gauge",
    title: "EXPONENTIAL DISPLAY - FGE-2GH",
    description: `
The FLEXA FGE-2GH Digital Pirani Vacuum Gauge Controller provides precise and reliable vacuum measurement for two independent channels. Designed to work with FG-04 sensor tubes, it offers a measurement range from 0.001 mBar to 20 mBar with exponential order display. The built-in zero and atmosphere adjustment features ensure easy sensor calibration, eliminating the need for gauge-level adjustments during sensor replacement. Ideal for fine and rough vacuum applications, it is suitable for controlling high vacuum systems and monitoring fore vacuum pressures.`,
    features: [
      "Measurement range of 0.001 mBar to 20 mBar.",
      "Supports two independent sensor channels.",
      "Compact, space-saving 1/8 DIN console design.",
      "Interchangeable sensors without disturbing the display unit.",
      "Bright 4-digit red LED display for easy readability.",
      "Built-in zero and atmosphere adjustments at the sensor level.",
    ],
    applications: [
      "Controlling high vacuum systems.",
      "Monitoring fore vacuum pressure.",
      "General vacuum measurement in fine and rough vacuum ranges.",
      "Safety circuits in vacuum systems.",
    ],
    specifications: [
      { name: "Number of Sensor Channels", value: "Two" },
      { name: "Display Range", value: "1000 mBar to 0.001 mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001 mBar" },
      { name: "Display Type", value: "Mantissa & exponential order display" },
      {
        name: "Units of Display",
        value: "mBar (optional torr, Pa on request)",
      },
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Temperature Range", value: "+2 to +50°C" },
      { name: "VAC Display", value: "4-digit bright red LED, 14 mm high" },
      { name: "Zero & ATM Adjustments", value: "Trim pot at the sensor PCB" },
      { name: "Process Control Set Points", value: "NIL" },
      { name: "Process Control Relays", value: "NIL" },
      { name: "Nonvolatile Memory", value: "NIL" },
      { name: "Operating Voltage", value: "90 ~ 264VAC, 50/60 Hz" },
      { name: "Mounting", value: "1/4 DIN 92 x 92 mm (3.62” x 3.62”)" },
      {
        name: "Environmental Conditions",
        value: "Not for explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm x 92mm x 110mm Depth" },
      {
        name: "Optional Outputs",
        value: "RS485, 0-10V DC analog output (optional)",
      },
      {
        name: "Sensor Cable",
        value:
          "RJ45 male plugs, 2m length (optional additional lengths available)",
      },
    ],
    end: `
Factory-calibrated sensors ensure accurate measurements with minimal dependency on adjustments. Optional calibration services and certificates are available on request at additional cost.`,
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/FGD-2GHbackpanel.jpg",
    ],
  },
  {
    id: "FGD-1GH-SP",
    code: "FG-1GH-SP",
    name: "DECIMAL DISPLAY",
    title: "DECIMAL DISPLAY - FG-1GH-SP",
    description: `
The FLEXA FG-1GH-SP Digital Pirani Vacuum Gauge Controller is designed for precise vacuum pressure measurement using the FG-04 sensor tube. With a measurement range from 0.001 mBar to 20 mBar, it is equipped with a potential-free contact set point relay output for process control. The built-in zero and atmosphere adjustment at the sensor level allows for seamless sensor replacement without additional gauge-level calibration. The FLEXA series is ideal for fine and rough vacuum applications, offering reliability and efficiency in vacuum measurement.`,
    features: [
      "Measurement range from 0.001 mBar to 20 mBar.",
      "Compact 1/8 DIN console design for space-saving installation.",
      "Interchangeable sensors without disturbing the display unit.",
      "4-digit bright red LED display for clear and accurate readings.",
      "Built-in zero and atmosphere adjustment for easy calibration.",
      "Universal power supply compatible with 90 ~ 264VAC, 50/60 Hz.",
    ],
    applications: [
      "Controlling high vacuum systems.",
      "Fore vacuum pressure monitoring.",
      "Safety circuits in vacuum systems.",
      "General vacuum measurement in fine and rough vacuum ranges.",
    ],
    specifications: [
      { name: "Number of Sensor Channels", value: "One" },
      { name: "Display Range", value: "1000 mBar to 0.001 mBar" },
      { name: "Measuring Range", value: "20 mBar to 0.001 mBar" },
      { name: "Measuring Unit", value: "mBar" },
      { name: "Vacuum Gauge Head", value: "FG-04 sensor tube" },
      { name: "Temperature Range", value: "+2 to +50°C" },
      { name: "Display", value: "4-digit bright red LED, 14 mm high" },
      { name: "Zero & ATM Adjustments", value: "Trim pot at the sensor PCB" },
      {
        name: "Process Control Set Points",
        value: "One potential-free contact relay",
      },
      {
        name: "Process Control Relays",
        value: "Available through DB15 accessory connector on the rear panel",
      },
      { name: "Nonvolatile Memory", value: "Only for set points" },
      { name: "Operating Voltage", value: "90 ~ 264VAC, 50/60 Hz" },
      { name: "Mounting", value: "1/4 DIN 92 x 92 mm (3.62” x 3.62”)" },
      {
        name: "Environmental Conditions",
        value: "Not for explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm x 92mm x 110mm Depth" },
      {
        name: "Optional Outputs",
        value: "RS485, 0-10V DC analog output (optional)",
      },
      {
        name: "Sensor Cable",
        value:
          "RJ45 male plugs, 2m length (optional additional lengths available)",
      },
    ],
    end: `
Unique Vacuum Solutions offers recalibration services to ensure your vacuum gauge remains in certified and peak condition. Calibration certificates are available on request at an additional cost.`,
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/flexapiranibackviewcompleteset.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/flexapiraniFGD-1GH-SPcompletesetdec.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/FGD1GHSPbackpanel.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/flexasensor.jpg",
    ],
  },
  {
    id: "HVP-4",
    code: "HVP-4",
    name: "OnePirani Vacuum Transducer",
    title: "HVP-4 OnePirani Vacuum Transducer",
    description: `
The HVP-4 OnePirani Vacuum Transducer is a MEMS-based Pirani sensor designed for precise vacuum measurement across a wide range (1×10⁻⁶ to 13.33 mbar / 7.5×10⁻⁷ to 10 Torr). Its advanced MEMS thermal conductivity technology, combined with precision digital signal processing and robust design, makes it ideal for critical vacuum applications and processes. The HVP-4 eliminates the need for expensive ionization gauges in many scenarios and offers excellent cost-effectiveness with high accuracy and repeatability.`,
    features: [
      "Wide measurement range: 1×10⁻⁶ to 13.33 mbar (7.5×10⁻⁷ to 10 Torr).",
      "MEMS Pirani thermal conductivity sensor with zero drift compensation.",
      "Analog output (0-10V) and digital RS232/RS485 interface.",
      "Three optional programmable SSR setpoint relay outputs.",
      "Integrated ambient temperature compensation.",
      "User-cleanable baffle for protection in harsh environments.",
      "RGB LED for visual pressure indication.",
    ],
    applications: [
      "PVD coating processes.",
      "Mass spectrometers and analytical equipment.",
      "Fore-line vacuum and freeze drying.",
      "Sterilization processes and load lock systems.",
      "Vacuum furnaces and safety circuits.",
    ],
    specifications: [
      {
        name: "Measuring Range",
        value: "1×10⁻⁶ to 13.33 mbar (7.5×10⁻⁷ to 10 Torr)",
      },
      {
        name: "Measuring Principle",
        value: "MEMS Pirani thermal conductivity",
      },
      {
        name: "Accuracy Range 1",
        value: "1×10⁻⁵ to 9.99×10⁻⁵ mbar : 25% of reading",
      },
      {
        name: "Accuracy Range 2",
        value: "1×10⁻⁴ to 9.99×10⁻¹ mbar : 5% of reading",
      },
      {
        name: "Accuracy Range 3",
        value: "1.00 to 13.33 mbar : 30% of reading",
      },
      {
        name: "Hysteresis Range",
        value: "1.00 to 13.33 mbar : 1%",
      },
      {
        name: "Analog Output (16-bit (150 μV)",
        value: "124 Hz",
      },
      {
        name: "Response Time",
        value: "<20 ms (ISO 19685:2017)",
      },
      {
        name: "Temperature Compensation",
        value: "+10 to +50 °C",
      },
      {
        name: "Solid State Relay",
        value: "5×10⁻⁶ to 13.33 mbar (3.75×10⁻⁶ to 10 Torr)",
      },
      {
        name: "Contact Rating",
        value: "50 V, 100 mArms/mADC",
      },
      {
        name: "Approvals UL",
        value: "UL Recognized: File E76270",
      },
      {
        name: "Approvals CSA",
        value: "CSA Certified: Certificate 1175739",
      },
      {
        name: "Approvals EN/IEC",
        value: "EN/IEC 60950-1 Certified",
      },
      {
        name: "operating temperature",
        value: "-20 to +50 °C",
      },
      {
        name: "media temperature",
        value: "-20 to +50 °C",
      },
      {
        name: "Storage temperature",
        value: "-40 to +120 °C",
      },
      {
        name: "Bake out temperature",
        value: "+120 °C",
      },
      {
        name: "Maximum pressure",
        value: "10 bar absolute",
      },
      {
        name: "Protection",
        value: "IP40 (EN 60529/A2:2013)",
      },
      {
        name: "Humidity",
        value: "98%, non-condensing",
      },
      {
        name: "Power voltage",
        value: "12-30 VDC",
      },
      {
        name: "Power consumption",
        value: "240 mW (max)",
      },
      {
        name: "Reverse polarity protection",
        value: "Yes",
      },
      {
        name: "Overvoltage protection",
        value: "Yes",
      },
      {
        name: "Internal fuse",
        value: "100 mA (thermal recoverable)",
      },
      {},
      {
        name: "Material enclosure",
        value: "SS 1.4307 / AISI 304L / Aluminum 6061",
      },
      {
        name: "Vacuum process flange",
        value: "SS 1.4307 / AISI 304L",
      },
      {
        name: "Vacuum exposed materials",
        value:
          "304L Stainless steel, Kovar, Glass, Silicon, Nickel, Aluminum, SiO₂, Si₃N₄, Gold, Viton®, Low out-gassing epoxy resin",
      },

      {
        name: "Leak tightness",
        value: "<1·10⁻⁹ mbar·l/sec (ISO 27895:2009)",
      },
    ],
    end: `
The HVP-4 OnePirani is a reliable, robust, and cost-effective solution for precision vacuum measurement in a variety of industrial and research applications. With its advanced MEMS technology, programmable features, and ease of use, it provides a modern alternative to conventional ionization gauges.`,
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/HVP4photo.jpg",
    ],
  },
  {
    id: "HVP-5",
    code: "HVP-5",
    name: "OnePirani Vacuum Transducer",
    title: "HVP-5 OnePirani Vacuum Transducer",
    description:
      "The HVP-5 OnePirani Vacuum Transducer is a MEMS-based Pirani sensor combined with a diaphragm piezo transducer, designed for precise vacuum measurement across an ultra-wide range (1×10⁻⁶ to 1333 mbar / 7.5×10⁻⁷ to 1000 Torr). Its advanced sensing technology, including MEMS Pirani, piezo resistive diaphragm, and precision digital signal processing, offers excellent accuracy and repeatability for critical vacuum applications and processes. The HVP-5 is a cost-effective alternative to conventional hot cathode and cold cathode ionization gauges.",
    features: [
      "Ultra-wide measuring range: 1×10⁻⁶ to 1333 mbar (7.5×10⁻⁷ to 1000 Torr).",
      "Gas-independent measurement from 2 to 1333 mbar.",
      "Easy configuration with USB programmer.",
      "0-10 VDC programmable voltage output.",
      "Digital RS-232 or RS-485 interface.",
      "Optional ceramic or Parylene sensor protection for corrosive applications.",
      "Optional solid state setpoint relay for external control.",
      "Compatibility with other brand gauges for pin and output compatibility.",
    ],
    applications: [
      "PVD coating processes.",
      "Mass spectrometers and analytical vacuum systems.",
      "Freeze drying and semiconductor processing.",
      "Sterilization processes and load lock systems.",
      "Vacuum furnaces.",
    ],
    specifications: [
      {
        name: "Measuring Range",
        value: "1×10⁻⁶ to 1333 mbar (7.5×10⁻⁷ to 1000 Torr)",
      },
      {
        name: "Measuring Principle 1 (Low Range)",
        value: "MEMS Pirani thermal conductivity (1×10⁻⁶ to 1.5 mbar)",
      },
      {
        name: "Measuring Principle 2 (Mid Range)",
        value:
          "Blended MEMS Pirani / piezo resistive diaphragm (1.5 to 2 mbar)",
      },
      {
        name: "Measuring Principle 3 (High Range)",
        value: "MEMS piezo resistive diaphragm (2 to 1333 mbar)",
      },
      {
        name: "Accuracy Range 1",
        value: "1×10⁻⁵ to 9.99×10⁻⁵ mbar : 25% of reading",
      },
      {
        name: "Accuracy Range 2",
        value: "1×10⁻⁴ to 7.99 mbar : 5% of reading",
      },
      {
        name: "Accuracy Range 3",
        value: "8.00 to 99.9 mbar : 1% of reading",
      },
      {
        name: "Accuracy Range 4",
        value: "100 to 800 mbar : 0.5% of reading",
      },
      {
        name: "Accuracy Range 5",
        value: "800 to 1099 mbar : 0.25% of reading",
      },
      {
        name: "Accuracy Range 6",
        value: "1100 to 1333 mbar : 0.5% of reading",
      },
      {
        name: "Hysteresis Range 1",
        value: "1×10⁻³ to 10 mbar (ISO 19685:2017) : 1%",
      },
      {
        name: "Hysteresis Range 2",
        value: "10 to 1333 mbar (ISO 19685:2017) : 0.1%",
      },
      {
        name: "Analog Output",
        value: "16-bit resolution (150 μV) with a 124 Hz update rate",
      },
      {
        name: "Response Time",
        value: "<20 ms (ISO 19685:2017)",
      },
      {
        name: "Temperature Compensation",
        value: "+10 to +50 °C",
      },
      {
        name: "Solid State Relay Setpoint Range",
        value: "5×10⁻⁶ to 1333 mbar (3.75×10⁻⁶ to 1000 Torr)",
      },
      {
        name: "Solid State Relay Contact Rating",
        value: "50 V, 100 mArms / mADC",
      },
      {
        name: "Approvals UL",
        value: "UL Recognized: File E76270",
      },
      {
        name: "Approvals CSA",
        value: "CSA Certified: Certificate 1175739",
      },
      {
        name: "Approvals EN/IEC",
        value: "EN/IEC 60950-1 Certified",
      },
      {
        name: "Operating Temperature",
        value: "-20 to +50 °C",
      },
      {
        name: "Media Temperature",
        value: "-20 to +50 °C",
      },
      {
        name: "Storage Temperature",
        value: "-40 to +120 °C",
      },
      {
        name: "Bake-out Temperature",
        value: "+120 °C",
      },
      {
        name: "Maximum Pressure",
        value: "10 bar absolute",
      },
      {
        name: "Protection",
        value: "IP40 (EN 60529/A2:2013)",
      },
      {
        name: "Humidity",
        value: "98%, non-condensing",
      },
      {
        name: "Power Voltage",
        value: "12-30 VDC",
      },
      {
        name: "Power Consumption",
        value: "240 mW (max)",
      },
      {
        name: "Reverse Polarity Protection",
        value: "Yes",
      },
      {
        name: "Overvoltage Protection",
        value: "Yes",
      },
      {
        name: "Internal Fuse",
        value: "100 mA (thermal recoverable)",
      },
      {
        name: "Material Enclosure",
        value: "SS 1.4307 / AISI 304L / Aluminum 6061",
      },
      {
        name: "Vacuum Process Flange",
        value: "SS 1.4307 / AISI 304L",
      },
      {
        name: "Vacuum Exposed Materials (Parylene)",
        value: "316 Stainless steel, Viton®, Parylene",
      },
      {
        name: "Vacuum Exposed Materials (Ceramic)",
        value: "316 Stainless steel, Viton®, Aluminum oxide ceramic (AI2O3)",
      },
      {
        name: "Leak Tightness",
        value: "<1·10⁻⁹ mbar·l/sec (ISO 27895:2009)",
      },
    ],
    end: "The HVP-5 OnePirani is a reliable, ultra-wide-range vacuum transducer that provides excellent performance for a variety of industrial and research applications. Its advanced technology, broad compatibility, and ease of use make it an ideal solution for precise and cost-effective vacuum measurement.",
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/HVP5photo.jpg",
    ],
  },
  {
    id: "HVP-7AT",
    code: "HVP-7AT",
    name: "OnePirani Vacuum Transducer",
    title: "HVP-7AT OnePirani Vacuum Transducer",
    description:
      "The HVP-7AT OnePirani Vacuum Transducer is designed for ultra-precise vacuum measurement across a wide range (1×10⁻⁶ to 1333 mbar). It combines MEMS Pirani, diaphragm piezo resistive transducers, and atmospheric switch functionality for highly accurate pressure monitoring and control. This device is ideal for applications in load-lock systems, mass spectrometers, and semiconductor processing, with optional ceramic or Parylene protection for harsh environments.",
    features: [
      "Ultra-wide measuring range: 1×10⁻⁶ to 1333 mbar (7.5×10⁻⁷ to 1000 Torr).",
      "Precise atmospheric switch function for stable pressure control.",
      "Gas-independent measurement from 2 to 1333 mbar.",
      "Easy configuration with USB programmer.",
      "0-10 VDC programmable voltage output.",
      "Digital RS-232 or RS-485 interface.",
      "Optional ceramic or Parylene sensor protection for corrosive applications.",
      "Optional solid-state setpoint relay for external control.",
      "Integrated four pressure outputs for barometric, Pirani, diaphragm, and atmospheric pressure.",
    ],
    applications: [
      "Load-lock vacuum systems in semiconductor processing.",
      "Mass spectrometers and analytical vacuum systems.",
      "PVD applications for thin-film deposition.",
      "Freeze drying processes.",
      "Space simulation and vacuum furnaces.",
    ],
    specifications: [
      {
        name: "Measuring Range",
        value: "1×10⁻⁶ to 1333 mbar (7.5×10⁻⁷ to 1000 Torr)",
      },
      {
        name: "Measuring Principle 1 (Low Range)",
        value: "MEMS Pirani thermal conductivity (1×10⁻⁶ to 1.5 mbar)",
      },
      {
        name: "Measuring Principle 2 (Mid Range)",
        value:
          "Blended MEMS Pirani / piezo resistive diaphragm (1.5 to 2 mbar)",
      },
      {
        name: "Measuring Principle 3 (High Range)",
        value: "MEMS piezo resistive diaphragm (2 to 1333 mbar)",
      },
      {
        name: "Accuracy Range 1",
        value: "1×10⁻⁵ to 9.99×10⁻⁵ mbar : 25% of reading",
      },
      {
        name: "Accuracy Range 2",
        value: "1×10⁻⁴ to 7.99 mbar : 5% of reading",
      },
      {
        name: "Accuracy Range 3",
        value: "8.00 to 99.9 mbar : 1% of reading",
      },
      {
        name: "Accuracy Range 4",
        value: "100 to 800 mbar : 0.5% of reading",
      },
      {
        name: "Accuracy Range 5",
        value: "800 to 1099 mbar : 0.25% of reading",
      },
      {
        name: "Accuracy Range 6",
        value: "1100 to 1333 mbar : 0.5% of reading",
      },
      {
        name: "Hysteresis Range 1",
        value: "1×10⁻³ to 10 mbar (ISO 19685:2017) : 1%",
      },
      {
        name: "Hysteresis Range 2",
        value: "10 to 1333 mbar (ISO 19685:2017) : 0.1%",
      },
      {
        name: "Barometric Measurement Range",
        value: "300 to 1200 mbar",
      },
      {
        name: "Barometric Accuracy",
        value: "+/- 0.5 mbar",
      },
      {
        name: "Atmospheric Referenced Pressure Output Range",
        value: "-1333 to +1333 mbar",
      },
      {
        name: "Vacuum Temperature Sensor Range",
        value: "-20 to +85 °C",
      },
      {
        name: "Vacuum Temperature Sensor Accuracy",
        value: "+/- 1.5 °C",
      },
      {
        name: "Transducer Temperature Sensor Range",
        value: "-20 to +85 °C",
      },
      {
        name: "Transducer Temperature Sensor Accuracy",
        value: "+/- 1.5 °C",
      },
      {
        name: "Analog Output Resolution",
        value: "16 bit (150 µV)",
      },
      {
        name: "Analog Output Update Rate",
        value: "124 Hz",
      },
      {
        name: "Response Time (ISO 19685:2017)",
        value: "<20 ms",
      },
      {
        name: "Temperature Compensation",
        value: "+10 to +50 °C",
      },
      {
        name: "Solid State Relay Setpoint Range",
        value: "5×10⁻⁶ to 1333 mbar (3.75×10⁻⁶ to 1000 Torr)",
      },
      {
        name: "Solid State Relay Contact Rating",
        value: "50 V, 100 mArms / mADC",
      },
      {
        name: "Solid State Relay Contact Endurance",
        value: "Unlimited (no mechanical wear)",
      },
      {
        name: "Solid State Relay Approvals",
        value:
          "UL Recognized: File E76270, CSA Certified: Certificate 1175739, EN/IEC 60950-1 Certified",
      },
      {
        name: "Operating Temperature",
        value: "-20 to +50 °C",
      },
      {
        name: "Media Temperature",
        value: "-20 to +50 °C",
      },
      {
        name: "Storage Temperature",
        value: "-40 to +120 °C",
      },
      {
        name: "Bake-out Temperature",
        value: "+120 °C",
      },
      {
        name: "Maximum Media Pressure",
        value: "10 bar absolute",
      },
      {
        name: "Protection Rating",
        value: "IP40 (EN 60529/A2:2013)",
      },
      {
        name: "Humidity",
        value: "98%, non-condensing",
      },
      {
        name: "Power Supply Voltage",
        value: "12-30 VDC",
      },
      {
        name: "Power Consumption",
        value: "240 mW (max)",
      },
      {
        name: "Reverse Polarity Protection",
        value: "Yes",
      },
      {
        name: "Overvoltage Protection",
        value: "Yes",
      },
      {
        name: "Internal Fuse",
        value: "100 mA (thermal recoverable)",
      },
      {
        name: "Enclosure Material",
        value: "SS 1.4307 / AISI 304L / Aluminum 6061",
      },
      {
        name: "Vacuum Process Flange Material",
        value: "SS 1.4307 / AISI 304L",
      },
      {
        name: "Vacuum Exposed Materials (Parylene)",
        value: "316 Stainless steel, Viton®, Parylene",
      },
      {
        name: "Vacuum Exposed Materials (Ceramic)",
        value: "316 Stainless steel, Viton®, Aluminum oxide ceramic (AI2O3)",
      },
      {
        name: "Process Leak Tightness",
        value: "<1·10⁻⁹ mbar·l/sec (ISO 27895:2009)",
      },
      {
        name: "MTBF",
        value: "13,092,170 hours / 1494 years",
      },
      {
        name: "Failure Rate FIT",
        value: "76.38",
      },
    ],
    end: "The HVP-7AT OnePirani is an advanced vacuum transducer offering precise control and measurement capabilities for various demanding applications. With integrated barometric, Pirani, and diaphragm sensors, along with the option for protective coatings, it’s ideal for harsh environments and applications like load-lock systems and semiconductor processing.",
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/HVP5photo.jpg",
    ],
  },
  {
    id: "DVG-1S",
    code: "DVG-1S",
    name: "Diaphragm Vacuum Gauge",
    title: "DVG-1S Diaphragm Vacuum Gauge",
    description:
      "The DVG-1S Diaphragm Vacuum Gauge is a high-accuracy sensor with excellent chemical resistance and robustness, featuring a ceramic diaphragm sensor for precise vacuum measurement. It provides a wide measuring range from 0.1 to 1333 mbar (0.1 to 1000 Torr) and offers programmable output options such as 4-20 mA and 0-10 VDC. Its high repeatability and temperature compensation circuit make it ideal for harsh environments and critical applications in industries like PVD coating, mass spectrometers, freeze drying, and sterilization.",
    features: [
      "High accuracy: 0.75% of reading.",
      "Repeatability: 0.1% of reading.",
      "Measuring range: 0.1 to 1333 mbar / 0.1 to 1000 Torr.",
      "Ceramic diaphragm sensor with excellent chemical resistance.",
      "Programmable current output (4-20 mA).",
      "Programmable voltage output (0-10 VDC).",
      "Built-in temperature compensation circuit.",
      "Robust SS316 design.",
      "IP67 enclosure for harsh environments.",
      "Optional SSR for setpoint outputs.",
    ],
    applications: [
      "PVD coating",
      "Mass spectrometers",
      "Electron microscopes",
      "Fore-line vacuum",
      "Freeze drying",
      "Sterilization processes",
      "Load lock systems",
      "Vacuum furnaces",
    ],
    specifications: [
      {
        name: "Measuring Range",
        value: "0.1 to 1333 mbar (0.1 to 1000 Torr)",
      },
      {
        name: "Accuracy of Reading",
        value: "0.75% of reading",
      },
      {
        name: "Accuracy of Full-scale",
        value: "+/- 0.1% BFSL",
      },
      {
        name: "Repeatability",
        value: "0.1% of reading",
      },
      {
        name: "Thermal Drift (Offset, Base: 22°C)",
        value: "+/- 0.01%/°C of full-scale (from +10 to +50°C)",
      },
      {
        name: "Output Signal (Voltage Version)",
        value: "0-10 VDC (Programmable scaling)",
      },
      {
        name: "Output Resolution (Voltage Version)",
        value: "16 bit / 150 µV",
      },
      {
        name: "Output Signal (Current Version)",
        value: "4-20 mA (Programmable scaling)",
      },
      {
        name: "Output Resolution (Current Version)",
        value: "16 bit / 244 nA",
      },
      {
        name: "Solid-State Relay Contact Rating (Optional)",
        value: "250 mA, 50 VDC / VAC peak",
      },
      {
        name: "Operating Ambient Temperature",
        value: "-40 to +100 °C",
      },
      {
        name: "Media Temperature at Flange",
        value: "-40 to +125 °C",
      },
      {
        name: "Storage Ambient Temperature",
        value: "-40 to +125 °C",
      },
      {
        name: "Maximum Media Pressure",
        value: "2000 mbar / 1500 Torr",
      },
      {
        name: "Burst Media Pressure",
        value: "3000 mbar / 2250 Torr",
      },
      {
        name: "Protection Rating",
        value: "IP67, IP65",
      },
      {
        name: "Humidity",
        value: "98%, non-condensing",
      },
      {
        name: "Power Supply",
        value: "12-30 VDC",
      },
      {
        name: "Power Consumption (Voltage Version)",
        value: "240 mW (max)",
      },
      {
        name: "Power Consumption (Current Version)",
        value: "600 mW (max)",
      },
      {
        name: "Reverse Polarity Protection",
        value: "Yes",
      },
      {
        name: "Overvoltage Protection",
        value: "Yes",
      },
      {
        name: "Internal Fuse",
        value: "100 mA (thermal recoverable)",
      },
      {
        name: "Materials",
        value:
          "Enclosure: SS 1.4404 / AISI 316L, Process Connection: SS 1.4404 / AISI 316L, Sensor Diaphragm: Ceramic Al2O3 96%, Sealing: FKM (Viton®) or optional FFKM",
      },
      {
        name: "Process Leak Tightness",
        value: "<1·10⁻⁹ mbar·l/sec.",
      },
    ],
    end: "The DVG-1S is a reliable and cost-effective solution for applications that require high accuracy and repeatability. Its versatile output options, robust design, and wide range of applications make it an ideal choice for a wide variety of vacuum measurement needs in harsh environments.",
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/HVP5photo.jpg",
    ],
  },
  {
    id: "10mmhgFS",
    code: "UVG-2",
    name: "Diaphragm Vacuum Gauge",
    title: "UVS McLEOD GAUGES",
    description:
      "This is a unique miniature McLeod gauge, based on a direct application of Boyle's Law. The gauge is available in two pressure ranges: Model- UVG/1 as a range from 1mm to 0.001mm of mercury and Model: UVG/2 as a range from 10mm to 0.01 mm of mercury. The scale attached to a gauge is calibrated in mm of mercury and accurate pressure readings within range may be taken. The normal position is horizontal. It is simply turned through 90° when the measure of pressure in a system is desired. This isolates a fixed volume of gas in the bulb and closed capillary which is compressed by mercury to a much smaller volume. The pressure of the vacuum system is read on the scale from the level of mercury at B in the closed capillary, when the level in the open capillary connected to the system, is at the Zero point A.",
    features: [
      "mercuryChargeRequired: (95-130)gms",
      "scale : 10 to 0.01 mm of Hg",
      "vacuumTestPerformanceCheck : OK",
    ],

    // specifications: [
    //   {
    //     name: "equipment Model",
    //     value: "UVG/1 , UVG/2",
    //   },
    //   {
    //     name: "issued To",
    //     value: "M/s.",
    //   },
    //   {
    //     name: "instrument",
    //     value: "UVG/1, UVG/2",
    //   },
    //   {
    //     name: "mercury Charge Required",
    //     value: "gms",
    //   },
    // ],
    // end: "Calibration of gauge was checked with full scale in-house McLeod Gauge. Suitable to measure higher range of vacuum.",
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/IMG-20150430-WA0009.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/Mcleodgaugerearview.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/Mcleodgauge10to0.001torr.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/20210715_130540.jpg",
    ],
  },
  {
    id: "1mmhgFS",
    code: "UVG - 1",
    name: "Miniature McLeod Gauge: Tilting Type on Stand",
    title: "UVS McLEOD GAUGES",
    description:
      "This is a unique miniature McLeod gauge, based on a direct application of Boyle's Law. The gauge is available in two pressure ranges: Model- UVG/1 as a range from 1mm to 0.001mm of mercury and Model: UVG/2 as a range from 10mm to 0.01 mm of mercury. The scale attached to a gauge is calibrated in mm of mercury and accurate pressure readings within range may be taken. The normal position is horizontal. It is simply turned through 90° when the measure of pressure in a system is desired. This isolates a fixed volume of gas in the bulb and closed capillary which is compressed by mercury to a much smaller volume. The pressure of the vacuum system is read on the scale from the level of mercury at B in the closed capillary, when the level in the open capillary connected to the system, is at the Zero point A.",
    features: [
      "mercury Charge Required: (95-130)gms",
      "scale : 1 to 0.001 mm of Hg ",
      "vacuum Test Performance Check: OK",
    ],

    // specifications: [
    //   // {
    //   //   name: "equipment Model",
    //   //   value: "UVG/1 , UVG/2",
    //   // },
    //   // {
    //   //   name: "issued To",
    //   //   value: "M/s.",
    //   // },
    //   // {
    //   //   name: "instrument",
    //   //   value: "UVG/1, UVG/2",
    //   // },
    //   // {
    //   //   name: "mercury Charge Required",
    //   //   value: "gms",
    //   // },
    // ],
    // end: "Calibration of gauge was checked with full scale in-house McLeod Gauge. Suitable to measure higher range of vacuum.",
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/20210715_131653.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/Mcleodgaugerearview.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/Mcleodgauge1torwithmercury.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/1mmofHgMcleodgaugewithoutmecurysideview.jpg",
    ],
  },
  {
    id: "2gh",
    code: "UVGE-2GH-SP",
    name: "exponential catalog",
    title: "Precision Helium Leak Detectors",
    description:
      "The UVS Model UVGE series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from FG-05A sensor tube. It displays vacuum measurements based on the thermal conductivity of gases. The Model UVGE-2GH-SP unit covers the range from 0.001 mbar to 100 mbar, and controls relay with independent set point.",
    features: [
      "Measurement range 0.001 to 100 mbar",
      "Space saving rugged design- 1/8 DIN console",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "With universal power supply – input voltage from 90 ~ 264VAC",
    ],
    images: [
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/IMG_2830.jpg",
      "https://staging.thirdeyegfx.in/UVC/UVC/assests/img/IMG_2827.jpg",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar" },
      { name: "Measuring Range", value: "100 mBar to 0.001mBar" },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "FG-05A sensor tube" },
      { name: "Temp. Range", value: "+2 to +50 deg. Celsius" },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "VAC and ATM Adjust",
        value:
          "Adjusted by trim pot at the signal conditioner PCB at the sensor",
      },
      {
        name: "Process control set points",
        value: "Two (one for each channel)",
      },
      {
        name: "Process Control Relays",
        value:
          "Two relays, potential free contacts; independent available through the DB15 accessory connector on the rear panel",
      },
      {
        name: "Nonvolatile Memory",
        value: "Only for set points",
      },
      {
        name: "Operating Voltage",
        value:
          "Universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      { name: "Mounting", value: "¼ DIN 92 x 92 mm (3.62” x 3.62)" },
      {
        name: "Environmental Considerations",
        value: "Not for use with explosive or corrosive gases",
      },
      { name: "Overall Dimensions", value: "92mm X 92mm X 110mm Depth" },
      {
        name: "Optional Outputs on Request",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
  },
];

// main image container inside it
//  <div class="Product_btns">
//    <div class="productBrochure">
//      <img src="../../assests/img/bookLines.svg" alt="Brochure Icon" /> Product
//      Brochure
//    </div>
//    <div class="requestQuote">Request a Quote</div>
//  </div>;

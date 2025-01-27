// Sample product data array
const products = [
  {
    id: "1ba",
    code: "DPRG-1GH",
    name: "DPRG Single Line Display",
    title: "Precision Helium Leak Detectors",
    description: `
         The UVS Model DPRG series Vacuum Pirani Gauge Controller displays vacuum pressure as measured from a
S-PR-GH sensor tube. It displays vacuum measurements based on thermal conductivity of gases. The Model
DPRG-1GH unit covers the range from 0.001 mbar to 20 mbar. 
        `,
    features: [
      "Measurement range 0.001 to 20 mbar ",
      "Space saving rugged design- 1/8 DIN console ",
      "Space saving rugged design- 1/8 DIN console",
      "brass body measuring cell with metal-sealed feed through",
      "with universal power supply – input voltage from 90 ~ 264VAC, frequency 47 ~ 440Hz",
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfmVt8gVvshz-3ne4f87Sq63BLfEQynWqfNQH98_Ea95oqtx7",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmgOhwvNzZl-t1NgavwGRFyxWUAlMdOL_ocjhtwP4ctikGKNSx",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIZaYaDf_0SeV5q4MuTuSO3a997Qz7XpCUTGkOwJnWx6wnXPB9",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "ONE" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar." },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar." },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
      {
        name: "Temp. Range",
        value: "+2 to +50 deg. Celsius",
      },
      {
        name: "VAC. Display",
        value: "Seven segment bright red LED, mantissa and exponential",
      },
      {
        name: "VAC and ATM Adjust",
        value: "adjusted by trim pot at the signal conditioner PCB",
      },
      {
        name: "Operating Voltage ",
        value:
          "universal power supply, input voltages from 90 ~ 264VAC 50/60 Hz",
      },
      {
        name: "Mounting",
        value: "¼ DIN 92 x 92 mm (3.62” x 3.62)",
      },
      {
        name: "Environmental Considerations",
        value: "not for use with explosive or corrosive gases",
      },
      {
        name: "Overall dimensions",
        value: "92mm X 92mm X 110mm Depth",
      },
      {
        name: "Optional outputs on request ",
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/
thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of
the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required.
The calibration certificates are available only on request at additional cost. Pl contact before ordering.`,
  },
  {
    id: "1bb",
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
      "Mounts in any orientation ■ brass body measuring cell with metal-sealed feed through ",
      "with universal power supply – input voltage from 90 ~ 264VAC, ",
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfmVt8gVvshz-3ne4f87Sq63BLfEQynWqfNQH98_Ea95oqtx7",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vneyjPZYmqNHq7bQZcy-X3_JWUIzs6TFPh6BU6H7MjitYLTq",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyPd15EBVrBi3zblkMaNAl7VvepQONdNHZwnDKMoL5uivUSQmf",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIZaYaDf_0SeV5q4MuTuSO3a997Qz7XpCUTGkOwJnWx6wnXPB9",
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/DPRG-2GH-SP-FULL-SET-EXPONENTIAL-scaled-e1657527390321-300x300.jpg",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "ONE" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar." },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar." },
      { name: "Units of Display", value: "m.Bar" },
      { name: "Vacuum Gauge Head", value: "S-PR-GH sensor tube" },
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
        value: "RS485, 0 -10V DC analog output",
      },
    ],
    end: `Unique Vacuum Solutions offers a convenient recalibration service to help users of vacuum measurement pirani/
thermocouple/ full range gauges to maintain all of their vacuum gauges in Certified and peak condition, regardless of
the original manufacturer. All makes of vacuum gauges can also be calibrated / repaired if required.
The calibration certificates are available only on request at additional cost. Pl contact before ordering. `,
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
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqGQ4RWrnDpzqV0NbIwlDSMfxB_P4okEa8mzH0VOcUdCC7MFQR",
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
      "Space saving rugged design- 1/8 DIN console",
      "Space saving rugged design- 1/8 DIN console",
      "Mounts in any orientation",
      "Brass body measuring cell with metal-sealed feed through",
      "With universal power supply – input voltage from 90 ~ 264VAC",
    ],
    images: [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzJr09k9aZBonwW5tS8fBkBQGD0rVWXYz7SeMO2nQdfNBBbVqH",
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/DPRG-2GH-SP-FULL-SET-EXPONENTIAL-scaled-e1657527390321.jpg",
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/DPRG-2GH-SP-back-panel-full-set-scaled.jpg",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIZaYaDf_0SeV5q4MuTuSO3a997Qz7XpCUTGkOwJnWx6wnXPB9",
    ],
    specifications: [
      { name: "Number of sensor channels", value: "TWO" },
      { name: "Display Range", value: "1000 mBar to 0.001mBar." },
      { name: "Measuring Range", value: "20 mBar to 0.001mBar." },
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
        value: "adjusted by trim pot at the signal conditioner PCB",
      },
      { name: "Process control set points", value: "two" },
      {
        name: "Process Control Relays",
        value:
          "Two relays, potential free contacts; independent available through the DB15 accessory connector on the rear panel",
      },
      { name: "Nonvolatile Memory", value: "Only for set points" },
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
    title: "FLEXA Digital Pirani Vacuum Gauge FGE-1GH",
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
    title: "FLEXA Digital Pirani Vacuum Gauge FGE-1GH-SP",
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
    name: "Pirani Vacuum Sensor",
    title: "Pirani Vacuum Sensor FG-05A",
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
    title: "FLEXA Digital Pirani Vacuum Gauge FGE-2GH-SP",
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
    title: "FLEXA Digital Pirani Vacuum Sensor FG-04",
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
    images: ["https://uniquevacuum.co.in/wp-content/uploads/2022/06/FG-04.jpg"],
  },
  {
    id: "HPRGD-1GH-SP",
    code: "HPRGD-1GH-SP",
    name: "Hybrid Pirani Vacuum Gauge",
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
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/hybrid-pirani-HPRGD-1GH-SP-dec-complete-set-LOW-RESOLUTION-scaled.jpg",
      "https://uniquevacuum.co.in/wp-content/uploads/2022/07/hybrid-sensor-HPRS-03.jpg",
      "http://127.0.0.1:5500/assests/img/hybridpiranibackviewassembly.jpg",
    ],
  },
  {
    id: "HPRGE-1GH-SP",
    code: "HPRGE-1GH-SP",
    name: "Digital Pirani Vacuum Gauge",
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
    name: "Hybrid Pirani Vacuum Gauge",
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
];

// Function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Get the product ID from the URL
const id = getUrlParameter("id");
console.log("Product ID:", id);

// Find the product with the matching ID
const product = products.find((p) => p.id === id);

// Reference to the container where the gallery will be injected
const prod = document.getElementById("producter");
 const productTable = document.getElementById("productTable");
 const end = document.getElementById("end");

if (product) {
  // Generate dynamic HTML based on the product data
  const html = `
        <div class="image-gallery">
          <div class="thumbnail-container">
            ${product.images
              .map(
                (img, index) => `
              <img
                class="thumbnail ${index === 0 ? "active" : ""}"
                src="${img}"
                alt="Thumbnail ${index + 1}"
                data-full="${img}"
              />
            `
              )
              .join("")}
          </div>
          <div class="main-image-container">
            <img
              id="main-image"
              src="${product.images[0]}"
              alt="Main Product Image"
            />
           
          </div>
        </div>
        <div class="product-details">
          <div style="display: flex; gap: 12px">
            <div class="productCode">${product.code}</div>
            <div class="productCode">${product.name}</div>
          </div>
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <div class="detailFeatures">
            <h2>Key Features Overview</h2>
            ${product.features
              .map(
                (feature) => `
              <div style="display: flex; gap: 10px; align-items: center">
               *
                <p>${feature}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
      `;
  prod.innerHTML = html;

    const tableHtml = `
        <div class="product-table">
          <h2>Technical Specifications</h2>
          <div class="tableBox">
            <table>
              ${product.specifications
                .map(
                  (spec) => `
                <tr>
                  <th>${spec.name}</th>
                  <td>${spec.value}</td>
                </tr>
              `
                )
                .join("")}
            </table>
          </div>
        </div>
      `;
    productTable.innerHTML = tableHtml;

    const endHtml = `
    <div class="end">
    <h2>Calibration: </h2>
    <p>${product.end}</p>
    </div>
    `;
    end.innerHTML = endHtml;

  // Initialize the gallery functionality
  initializeGallery();
} else {
  // Show a message if the product is not found
  prod.innerHTML = "<p>Product not found!</p>";
}

// Add event listeners to thumbnails
function initializeGallery() {
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      // Update the main image source
      mainImage.src = thumbnail.dataset.full;

      // Remove "active" class from all thumbnails
      thumbnails.forEach((t) => t.classList.remove("active"));

      // Add "active" class to the clicked thumbnail
      thumbnail.classList.add("active");
    });
  });
}



// table















// main image container inside it 
//  <div class="Product_btns">
//    <div class="productBrochure">
//      <img src="../../assests/img/bookLines.svg" alt="Brochure Icon" /> Product
//      Brochure
//    </div>
//    <div class="requestQuote">Request a Quote</div>
//  </div>;